import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Score } from './score/score';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Score],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('grange-calc');
}
