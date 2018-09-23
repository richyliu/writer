import { Component, OnInit } from '@angular/core';
import {DefinitionsService} from '../services/definitions.service';
import {Router} from '@angular/router';
import * as queryString from 'querystring';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  definition: string;
  hideTakePicture = true;

  constructor(
    private definitionsService: DefinitionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.definitionsService.reset();
    this.nextWord();
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
