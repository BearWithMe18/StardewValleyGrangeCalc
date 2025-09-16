import { Component, input, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Score } from './score/score';
import { GrangeItem } from './grange-item/grange-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Score, GrangeItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('grange-calc');
  item1Score = model(5);
  ScoreVal = signal(14 + this.item1Score());
}
