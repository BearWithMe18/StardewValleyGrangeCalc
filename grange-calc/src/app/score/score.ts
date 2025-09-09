import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.html',
  styleUrl: './score.css'
})
export class Score {
  public baseScore: Number = 14;
  public scoreVal: Number = 0;
}
