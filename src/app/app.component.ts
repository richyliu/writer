import { Component } from '@angular/core';

import img from './image';
import {ImageRequestService} from './services/image-request.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'writer';

  constructor(private imageRequestService: ImageRequestService) {}


  uploadImage(): void {
    console.log('made request');
    this.imageRequestService.request(img).subscribe(data => {
      console.log(data.responses[0].fullTextAnnotation);
    });
  }
}
