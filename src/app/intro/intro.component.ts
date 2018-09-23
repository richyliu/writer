import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  subjects = ['Math', 'Science', 'English', 'Spanish'];
  subject: string;

  constructor() { }

  ngOnInit() {
  }

}
