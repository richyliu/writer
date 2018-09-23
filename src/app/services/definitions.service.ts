import { Injectable } from '@angular/core';

import satvocab from './satvocab';

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService {

  private definitions: string[];
  private answers: string[];
  private numWords = 10;
  private current = 0;

  constructor() { }

  reset() {
    this.answers = Object.keys(satvocab);
    this.answers = this.answers.sort(() => Math.random() - 0.5).slice(0, this.numWords);
    this.definitions = this.answers.map(a => satvocab[a]);
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
    for (let i = 0; i < this.current - 1; i++) {
      ret.push(this.definitions[i]);
    }
    return ret;
  }

  // get all the answers for the corresponding all definitions
  getAllAnswers(): string[] {
    const ret = [];
    for (let i = 0; i < this.current - 1; i++) {
      ret.push(this.answers[i]);
    }
    return ret;
  }
}
