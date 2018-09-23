import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService {

  private definitions: string[];
  private answers: string[];
  private numWords = 10;
  private current = 0;

  constructor(private http: HttpClient) { }

  reset(subject: string, callback: () => void) {
    this.http.get(`https://basehacksproject.firebaseio.com/${subject}.json`).subscribe(data => {
      this.answers = Object.keys(data);
      this.answers = this.answers
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(this.numWords, this.answers.length));
      this.definitions = this.answers.map(a => data[a]);
      this.current = 0;

      callback();
    });
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
