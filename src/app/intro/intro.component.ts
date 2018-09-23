import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  subjects = ['Math', 'Science', 'English', 'Spanish'];
  subject: string;

  constructor(private router: Router, public location: Location) {
    this.subject = this.subjects[0];
  }

  ngOnInit() {
  }

  redir(): void {
    this.router.navigateByUrl('/game?subject=' + this.subject);
  }

  subjectChange($event: Event) {
    this.subject = ($event.currentTarget as HTMLInputElement).value;
  }
}
