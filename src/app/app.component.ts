import { Component } from '@angular/core';

@Component({
  selector: 'akis',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'efarmogi';
  name: string = 'Akis';
  salary: number = 50000;

  print() {
    return this.salary * 5;
  }
  print2() {
    return this.name;
  }
}
