import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSlideToggleModule],
  template: `
  <div class = "m-4">
    <h1>{{title}}</h1>
    <mat-slide-toggle>Test</mat-slide-toggle>
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
