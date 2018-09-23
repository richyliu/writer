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
    this.definitionsService.reset();
    this.nextWord();
    // set default time to 120 seconds
    this.timeLeft = this.totalTime;

    this.timer = window.setInterval(() => {
      this.timeLeft -= 0.1;
      this.timePercentage = this.timeLeft / this.totalTime * 100;
    }, 100);
  }


  nextWord(): void {
    this.definition = this.definitionsService.getNext();

    // once definitions run out, unhide the take picture button
    if (!this.definition) {
      this.hideTakePicture = false;
      this.router.navigateByUrl('/take-picture?' + queryString.stringify({
        definitions: this.definitionsService.getAllDefinitions(),
        answers: this.definitionsService.getAllAnswers()
      }));
    }
  }

}
