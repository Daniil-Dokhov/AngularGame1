import {Component, Input, OnInit} from '@angular/core';
import {KeyboardService} from '../services/keyboard.service';
import {MouseService} from '../services/mouse.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characterX = 10;
  characterY = 10;
  rotate = 180;

  private character;

  @Input() noBarrier: (x, y, charWidth, charHeight) => boolean;

  constructor(private keyboardService: KeyboardService, private mouseService: MouseService) {}

  ngOnInit(): void {
    this.character = window.document.getElementById('player');
    setInterval(this.checkKeys, 0);
    this.render();
  }

  checkKeys = () => {
    this.keyboardService.keys.forEach(key => {
      this.chooseAction(key);
    });
    this.countAngle();
  }

  chooseAction = (command) => {
    switch (command) {
      case 'a':
        this.move(-1, 0);
        break;
      case 's':
        this.move(0, 1);
        break;
      case 'd':
        this.move(1, 0);
        break;
      case 'w':
        this.move(0, -1);
        break;
    }
  }

  move = (x, y) => {
    x = this.characterX + x;
    y = this.characterY + y;
    if (this.noBarrier(x, y, 20, 20)) {
      this.characterX = x;
      this.characterY = y;
      this.countAngle();
      this.render();
    }
  }

  countAngle = () => {
    const rect = this.character.getBoundingClientRect();
    const centerX = rect.x + 10;
    const centerY = rect.y + 10;
    const radians = Math.atan2(this.mouseService.mouseX - centerX, this.mouseService.mouseY - centerY);
    const degree = (radians * (180 / Math.PI) * -1) + 90;
    this.rotate = degree;
    this.render();
}

  render = () => {
      this.character.style.marginLeft = this.characterX - 10 + 'px';
      this.character.style.marginTop = this.characterY - 10 + 'px';
      this.character.style.transform = 'rotate(' + this.rotate + 'deg)';
    }
}
