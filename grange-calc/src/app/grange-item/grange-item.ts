import { Component, input, model, signal } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grange-item',
  imports: [],
  templateUrl: './grange-item.html',
  styleUrl: './grange-item.css'
})
export class GrangeItem {
  categoryData = input<any>();
  itemNum = input(1);
  itemCategories = input<string[]>();
  itemScore = model<number>();
  item = "None";
  itemName = "";

  setItem(item: any){
    this.item = item.target.value;
    this.itemName = "";
  }

  setItemName(itemName: any){
    this.itemName = itemName.target.value;
  }

  category(item: string) {
    return this.categoryData()[item];
    //return this.categoryData[item as keyof typeof categoryData];
  }

  form = new FormGroup({
    itemCat: new FormControl(this.item),
    itemName: new FormControl(this.itemName),
  });

}
