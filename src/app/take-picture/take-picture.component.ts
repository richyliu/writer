import { Component, OnInit } from '@angular/core';

import * as queryString from 'querystring';

import {ImageRequestService} from '../services/image-request.service';


@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.css']
})
export class TakePictureComponent implements OnInit {

  constructor(
    private imageRequestService: ImageRequestService
  ) { }

  ngOnInit() {
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

    // read image data in b64
    const fileReader = new FileReader();
    fileReader.onload = e => {
      let b64 = fileReader.result;
      // change to RFC 4648 "Base 64 Encoding with URL and Filename Safe Alphabet"
      b64 = b64.replace(/\+/g, '-').replace(/\//g, '_');
      // remove "data:image_jpeg;base64,"
      b64 = b64.slice(23);

      console.log(b64);

      this.imageRequestService.request(b64).subscribe(data => {
        const text = data.responses[0].fullTextAnnotation.text;

        document.location.href = '/results?' + queryString.stringify({
          text: text
        });
      });
    };
    fileReader.readAsDataURL(file);
  }

}
