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
  qualities = input<string[]>();
  quality = "Normal"
  itemData = input<any>();

  setItem(item: any){
    this.item = item.target.value;
    this.itemName = "";
    this.itemForm.controls.itemCat.setValue(item.target.value);
    this.itemForm.controls.itemName.setValue("None");
  }

  setItemName(itemName: any){
    this.itemName = itemName.target.value;
    this.itemForm.controls.itemName.setValue(itemName.target.value);
  }

  setItemQuality(quality: any){
    this.quality = quality.target.value;
    this.itemForm.controls.itemQuality.setValue(quality.target.value);
  }

  category(item: string) {
    return this.categoryData()[item];
    //return this.categoryData[item as keyof typeof categoryData];
  }

  itemForm = new FormGroup({
    itemCat: new FormControl("None"),
    itemName: new FormControl("None"),
    itemQuality: new FormControl("Normal")
  });

}
