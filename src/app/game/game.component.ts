import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  definition: string = 'a person that wins something';
  hideTakePicture: boolean = true;

  constructor() { }

  ngOnInit() {
  }


  nextWord(): void {
    this.definition = '';
    this.hideTakePicture = false;
  }

}
