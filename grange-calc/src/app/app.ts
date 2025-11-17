import { Component, input, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Score } from './score/score';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import categoryData from '../data/categories.json';
import { GrangeItem } from './grange-item/grange-item';
import ItemData from '../data/itemData.json'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Score, ReactiveFormsModule, GrangeItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categoryData = categoryData;
  itemData = ItemData;

  protected readonly title = signal('grange-calc');

  itemCategories = ["None", "Animal Products", "Artisan Goods", "Cooking", "Fish", "Forage", "Fruits", "Minerals", "Vegetables"];

  qualities = ["Normal", "Silver", "Gold", "Iridium"];

  public scoreVal = 14;
  $number: any;
}
