import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import * as queryString from 'querystring';

import {DefinitionsService} from '../services/definitions.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  subject: string;
  definition: string;
  hideTakePicture = true;
  timeLeft: number;
  totalTime = 120;
  timePercentage: number;
  // Interval timer
  timer: number;

  constructor(
    private definitionsService: DefinitionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subject = queryString.parse(document.location.search.slice(1)).subject;

    this.definitionsService.reset(this.subject);
    this.nextWord();
    // set default time to 120 seconds
    this.timeLeft = this.totalTime;
    this.timePercentage = 100;

    // really accurate timer
    const start = Date.now();
    this.timer = window.setInterval(() => {
      this.timeLeft = this.totalTime - (Date.now() - start) / 1000;
      this.timePercentage = this.timeLeft / this.totalTime * 100;

      if (this.timeLeft < 0) {
        this.showTakePictures(true);
      }
    }, 10);
  }


  nextWord(): void {
    this.definition = this.definitionsService.getNext();

    // once definitions run out, unhide the take picture button
    if (!this.definition) {
      this.showTakePictures(false);
    }
  }

  private showTakePictures(noTime: boolean) {
    window.clearInterval(this.timer);
    this.hideTakePicture = false;
    this.router.navigateByUrl('/take-picture?' + queryString.stringify({
      definitions: this.definitionsService.getAllDefinitions(),
      answers: this.definitionsService.getAllAnswers(),
      noTime: noTime ? 'true' : 'false'
    }));
  }

}
