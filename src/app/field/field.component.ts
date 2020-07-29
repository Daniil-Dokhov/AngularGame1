import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  gameField;
  barrierHeight;
  barrierWidth;

  ngOnInit(): void {
    this.gameField = window.document.getElementById('field');
    this.barrierWidth = this.gameField.offsetWidth;
    this.barrierHeight = this.gameField.offsetHeight;
  }

  noBarrier = (x, y, charWidth, charHeight) => {
    const noHorizontalBarrier = (x <= this.barrierWidth - charWidth / 2) && (x >= charWidth / 2);
    const noVerticalBarrier = (y <= this.barrierHeight - charHeight / 2) && (y >= charHeight / 2);
    return noVerticalBarrier && noHorizontalBarrier;
  }
}
