import { Component, input, model, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grange-item',
  imports: [],
  templateUrl: './grange-item.html',
  styleUrl: './grange-item.css'
})
export class GrangeItem {
  itemForm = new FormGroup({
    itemInfo: new FormControl(''),
  });

  itemCategories = input<string[]>();
  itemScore = model<number>();

}
