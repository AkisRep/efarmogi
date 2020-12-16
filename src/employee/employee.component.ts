import { Component } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'emp-app',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {
  // countries: string[] = ["USA","CHINA","MALTA"];

  Employees: IEmployee[] = [
    { photoUrl: '#', firstname: 'Akis', lastname: 'Rep', salary: 20000 },
    { photoUrl: '#', firstname: 'Hector', lastname: 'Gatsos', salary: 350000 },
    { photoUrl: '#', firstname: 'Kots', lastname: 'Chatz', salary: 564800 },
  ];
}
