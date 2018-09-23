import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService {
  private definitions = [
    'The quality of being real and true instead of fake and contrived',
    'Kind, generous',
    'Thrilling, exciting, stimulating'
  ];

  private answers = [
    'authenticity',
    'benevolent',
    'galvanizing'
  ];


  private current = 0;

  constructor() { }

  reset() {
    this.current = 0;
  }

  getNext(): string {
    const ret = this.definitions[this.current];
    this.current++;
    return ret;
  }

  // get all the definitions that have been called by getNext
  getAllDefinitions(): string[] {
    const ret = [];
    for (let i = 0; i < this.current-1; i++) {
      ret.push(this.definitions[i]);
    }
    return ret;
  }

  // get all the answers for the corresponding all definitions
  getAllAnswers(): string[] {
    const ret = [];
    for (let i = 0; i < this.current-1; i++) {
      ret.push(this.answers[i]);
    }
    return ret;
  }
}
