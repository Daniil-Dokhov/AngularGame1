import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MouseService {

  mouseX = 0;
  mouseY = 0;

  constructor() {
    window.document.addEventListener('mousemove', event => this.mouseMove(event));
  }
  mouseMove = (event) => {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
