import { Component, OnInit } from '@angular/core';

import * as queryString from 'querystring';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  imageText: string;

  constructor() { }

  ngOnInit() {
    // get the query, removing the ? (although documentation says unnecessary, still necessary
    const query = queryString.parse(document.location.search.slice(1));
    this.imageText = query.text;
  }

}
