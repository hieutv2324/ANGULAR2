import { Component } from '@angular/core';

@Component({
  selector: 'app-ngforof',
  templateUrl: './ngforof.component.html',
  styleUrls: ['./ngforof.component.css'],
})
export class NgforofComponent {
  authors = [
    {
      id: 1,
      firstName: 'Hieu',
      lastName: 'Tran',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Ngoc',
      lastName: 'Nguyen',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    {
      id: 3,
      firstName: 'Linh',
      lastName: 'Le',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
  ];
}
