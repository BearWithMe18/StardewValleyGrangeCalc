import { Component, input, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Score } from './score/score';
import { GrangeItem } from './grange-item/grange-item';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, Score, GrangeItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Item1 = new FormControl('');
  itemCategories = signal(["None", "Animal Products", "Artisan Goods", "Cooking", "Fish", "Foraging", "Fruits", "Minerals", "Vegetables"]);
  protected readonly title = signal('grange-calc');
  item1Score = model(5);
  ScoreVal = signal(14 + this.item1Score());
}
