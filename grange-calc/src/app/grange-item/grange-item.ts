import { Component, input, model, signal } from '@angular/core';
import categoryData from '../../data/categories.json';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grange-item',
  imports: [],
  templateUrl: './grange-item.html',
  styleUrl: './grange-item.css'
})
export class GrangeItem {
  categoryData = categoryData;
  itemNum = input(1);
  itemCategories = input<string[]>();
  itemScore = model<number>();
  item = "";
  itemName = "";

  setItem(item: any){
    this.item = item.target.value;
    this.itemName = "";
  }

  setItemName(item: any){
    this.itemName = item.target.value;
  }

  category(item: string) {
    return categoryData[item as keyof typeof categoryData];
  }

  form = new FormGroup({
    itemCat: new FormControl(this.item),
    itemName: new FormControl(this.itemName),
  });

}
