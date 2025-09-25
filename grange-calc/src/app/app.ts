import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Score } from './score/score';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Score, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('grange-calc');

  itemCategories = signal(["None", "Animal Products", "Artisan Goods", "Cooking", "Fish", "Foraging", "Fruits", "Minerals", "Vegetables"]);

  itemForm = new FormGroup({
    item1: new FormControl(this.itemCategories()[0]),
  })
  
  public scoreVal = 14;
}
