import { Component } from '@angular/core';

import {ImageRequestService} from './services/image-request.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'writer';

  constructor(private imageRequestService: ImageRequestService) {}


}
