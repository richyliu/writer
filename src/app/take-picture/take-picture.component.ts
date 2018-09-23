import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import * as queryString from 'querystring';
import * as ons from 'onsenui';

import {ImageRequestService} from '../services/image-request.service';


@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.css']
})
export class TakePictureComponent implements OnInit {

  loading = false;

  constructor(
    private imageRequestService: ImageRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('take-picture ngOnInit');
    // show toast if user ran out of time
    if (document.location.search.indexOf('noTime=true') >= 0) {
      ons.notification.toast('You ran out of time! Take a picture of what you have', {
        timeout: 2000
      });
    }
  }

  /**
   * Gets the image data, sends it to the Google Vision API, and pass the words to results via image-text service
   * @param event Event passed in by the event emitter
   */
  uploadPicture(event: EventTarget) {
    // get the file
    const eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    const target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    const files: FileList = target.files;
    const file = files[0];

    this.loading = true;

    loadImage.parseMetaData(file, metaData => {
      let orientation = 0;
      if (metaData.exif) {
        orientation = metaData.exif.get('Orientation');
      }

      const loadingImage = loadImage(file, canvas => {
        let gray64 = this.gray(canvas);

        // change to RFC 4648 "Base 64 Encoding with URL and Filename Safe Alphabet"
        gray64 = gray64.replace(/\+/g, '-').replace(/\//g, '_');
        // remove "data:image_jpeg;base64,"
        gray64 = gray64.slice(23);

        // google vision api request with base64 image
        this.imageRequestService.request(gray64).subscribe(data => {
          // get the text from the json
          const text = data.responses[0].fullTextAnnotation.text;
          this.loading = false;

          // navigate to results with the text interpretation from google vision, pass current query along
          this.router.navigateByUrl(`/results${document.location.search}&${queryString.stringify({
            text: text
          })}`);
        });
      }, {canvas: true, orientation: orientation});
    });
  }


  // grayscale helper function written by Eric
  private gray(canvas: HTMLCanvasElement): string {
    const canvasContext = canvas.getContext('2d');

    const imgW = canvas.width;
    const imgH = canvas.height;

    const imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);

    for (let y = 0; y < imgPixels.height; y++) {
      for (let x = 0; x < imgPixels.width; x++) {
        const i = (y * 4) * imgPixels.width + x * 4;
        const avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
        imgPixels.data[i] = avg;
        imgPixels.data[i + 1] = avg;
        imgPixels.data[i + 2] = avg;
      }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL('image/jpeg');
  }
}
