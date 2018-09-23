import { Injectable } from '@angular/core';

import satvocab from './satvocab';
import mathquestions from './math-questions';
import spanish from './spanish';
import science from './science';

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService {

  private definitions: string[];
  private answers: string[];
  private numWords = 10;
  private current = 0;

  constructor() { }

  reset(subject: string) {
    switch (subject) {
      case 'Math':
        [this.answers, this.definitions] = this.selectQA(mathquestions);
        break;
      case 'Science':
        [this.answers, this.definitions] = this.selectQA(science);
        break;
      case 'English':
        [this.answers, this.definitions] = this.selectQA(satvocab);
        break;
      case 'Spanish':
        [this.answers, this.definitions] = this.selectQA(spanish);
        break;
      default:
        console.log('cannot be this?');
        // do nothing
    }
    this.current = 0;

    console.log(this.answers);
    console.log(this.definitions);
  }

  /**
   * Select a random subset of combined to be displayed as questions and answers
   * @param combined  Object with answer as key and question as value
   * @return          [answers, definitions]
   */
  private selectQA(combined): [string[], string[]] {
    let answers = Object.keys(combined);
    answers = answers
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(this.numWords, answers.length));
    const definitions = answers.map(a => combined[a]);
    return [answers, definitions];
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
