import { Component, OnInit } from '@angular/core';

import * as queryString from 'querystring';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  imageText: string;
  // contains user's answers, correct answers, and correct boolean
  displayTable: object[];
  numCorrect = 0;

  constructor() { }

  ngOnInit() {
    // get the query, removing the ? (although documentation says unnecessary, still necessary
    const query = queryString.parse(document.location.search.slice(1));
    const responseText = query.text as string;
    this.imageText = responseText;
    console.log(query);

    const res = this.processInput(responseText, query.answers);

    this.displayTable = [];
    for (let i = 0; i < query.answers.length; i++) {
      this.displayTable.push({
        userAnswer: res.input[i],
        answer: query.answers[i],
        correct: res.correct[i]
      });
    }

  }


  // written by suraj
  // function that takes json text from user attempts and splits //data and returns a table
  processInput(parseText, real): any {
    const correct = [];


    // goes through the input strings and takes out the numbers
    // and parentheses that represent the beginning of the
    // problem
    let string = '\n';
    for (let i = 0; i < parseText.length; i++) {
      if ((parseText.charAt(i) < '1' || parseText.charAt(i) > '9') && parseText.charAt(i) !=+ ')') {
        string += parseText.charAt(i);
      }
    }

    // splits the string into a list of the individual inputs of
    // the user
    let input = string.split('\n');
    input.splice(0, 1);
    input.splice(input.length - 1, 1);

    input = input.map(a => {
      a = a
        .trim()
        .toLowerCase();
      return a.split(' ')[a.split(' ').length - 1];
    });

    // goes through each item in the inputs and the answers, and
    // if they are the same, mark it as correct
    for (let i = 0; i < real.length; i++) {
      correct.push(input[i] === real[i].toLowerCase());
    }

    this.numCorrect = correct.filter(Boolean).length;

    return {
      input: input,
      correct: correct
    };
  }
}
