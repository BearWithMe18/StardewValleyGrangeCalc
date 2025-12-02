import { Component, input, model, signal } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grange-item',
  imports: [],
  templateUrl: './grange-item.html',
  styleUrl: './grange-item.css'
})
export class GrangeItem {
  itemNum = input(1);
  itemCategories = input<string[]>();
  itemScore = model<number>();
  qualities = input<string[]>();
  itemData = input<any>();

  setItem(item: any){
    this.itemForm.controls.itemCat.setValue(item.target.value);
    this.itemForm.controls.itemName.setValue("None");
  }

  setItemName(itemName: any){
    this.itemForm.controls.itemName.setValue(itemName.target.value);
  }

  setItemQuality(quality: any){
    this.itemForm.controls.itemQuality.setValue(quality.target.value);
  }

  category() {
    let item: string = this.itemForm.controls.itemCat.value?this.itemForm.controls.itemCat.value:"None";
    let temp: string[] = [];
    this.itemData().forEach((storedItem: {
      ItemCategory: string; Name: string;
}) => {
      if (item == storedItem.ItemCategory) {
        temp.push(storedItem.Name)
      }
    });
    return temp;
  }

  itemForm = new FormGroup({
    itemCat: new FormControl("None"),
    itemName: new FormControl("None"),
    itemQuality: new FormControl("Normal")
  });

}
