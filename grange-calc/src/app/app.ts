import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Score } from './score/score';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import categoryData from '../data/categories.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Score, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ngOnInit() {
    console.log(categoryData['Animal Products']);
  }
  categoryData = categoryData;
  protected readonly title = signal('grange-calc');

  itemCategories = signal(["None", "Animal Products", "Artisan Goods", "Cooking", "Fish", "Foraging", "Fruits", "Minerals", "Vegetables"]);

  itemForm = new FormGroup({
    item1: new FormControl(this.itemCategories()[0]),
    item2: new FormControl(this.itemCategories()[0]),
    item3: new FormControl(this.itemCategories()[0]),
    item4: new FormControl(this.itemCategories()[0]),
    item5: new FormControl(this.itemCategories()[0]),
    item6: new FormControl(this.itemCategories()[0]),
    item7: new FormControl(this.itemCategories()[0]),
    item8: new FormControl(this.itemCategories()[0]),
    item9: new FormControl(this.itemCategories()[0]),
  })

  public scoreVal = 14;
  $number: any;

  category(_index: number) {
    var temp = this.itemForm.get('item' + (_index))?.value;
    return categoryData[temp as keyof typeof categoryData];
  }
}
