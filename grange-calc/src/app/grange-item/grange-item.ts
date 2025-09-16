import { Component, input, model, signal } from '@angular/core';

@Component({
  selector: 'app-grange-item',
  imports: [],
  templateUrl: './grange-item.html',
  styleUrl: './grange-item.css'
})
export class GrangeItem {
  itemCategories = input<string[]>();
  itemScore = model<number>();

}
