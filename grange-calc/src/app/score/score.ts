import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.html',
  styleUrl: './score.css'
})
export class Score {
  ScoreVal = input<number>();
}
