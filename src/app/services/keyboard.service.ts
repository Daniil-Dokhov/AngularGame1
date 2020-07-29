import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {

  keys = new Set();

  constructor() {
    window.document.addEventListener('keyup', event => this.removeKeyFromQueue(event));
    window.document.addEventListener('keydown', event => this.addKeyInQueue(event));
  }
  addKeyInQueue = (event) => {
    this.keys.add(event.key);
  }
  removeKeyFromQueue = (event) => {
    this.keys.delete(event.key);
    console.log(this.keys);
  }
}
