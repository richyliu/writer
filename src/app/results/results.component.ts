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
    const answers = query.answers || [];
    const responseText = query.text as string;
    this.imageText = responseText;
    console.log(query);

    const res = this.processInput(responseText, answers);

    this.displayTable = [];
    for (let i = 0; i < answers.length; i++) {
      this.displayTable.push({
        userAnswer: res.input[i],
        answer: answers[i],
        correct: res.correct[i]
      });
    }

  }


  // written by suraj
  // function that takes json text from user attempts and splits //data and returns a table
  processInput(parseText, real): any {
    const correct = [];

    // sometimes 1) becomes O
    if (parseText[0] === 'O') {
      parseText = '1)' + parseText.slice(1);
    }

    // goes through the input strings and takes out the numbers
    // and parentheses that represent the beginning of the
    // problem
    // let string = '\n';
    // for (let i = 0; i < parseText.length; i++) {
    //   if ((parseText.charAt(i) < '1' || parseText.charAt(i) > '9') && parseText.charAt(i) !== ')') {
    //     string += parseText.charAt(i);
    //   }
    // }
    const string = parseText;

    // splits the string into a list of the individual inputs of
    // the user
    const input = string.split('\n');
    const parsedInput = Array(real.length);

    for (let i = 0; i < input.length; i++) {
      const split = input[i].split(')');
      const numId = parseInt(split[0], 10);
      if (split[1]) {
        parsedInput[numId - 1] = split[1].trim().toLowerCase();
      }
    }
    for (let i = 0; i < parsedInput.length; i++) {
      if (!parsedInput[i]) {
        parsedInput[i] = '';
      }
    }

    // goes through each item in the inputs and the answers, and
    // if they are the same, mark it as correct
    for (let i = 0; i < real  .length; i++) {
      correct.push(parsedInput[i] === real[i].toLowerCase());
    }

    this.numCorrect = correct.filter(Boolean).length;

    return {
      input: parsedInput,
      correct: correct
    };
  }
}
