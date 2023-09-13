import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css'],
  // template: `
  //   <h2>Hello there!</h2>
  //   <h3>Your name: {{ user.name }}</h3>
  //   <button (click)="user.age = user.age - 1">-</button>
  //   Age: {{ user.age }}
  //   <button (click)="user.age = user.age + 1">+</button>
  //   <!-- <div *ngIf="user.age >= 18">Bạn có thể xem nội dung PG-18</div>
  //   <div *ngIf="user.age < 18">Bạn không thể xem nội dung PG-18</div> -->
  //   <div *ngIf="user.age >= 13; else noPG13">Bạn có thể xem nội dung PG-13</div>
  //   <ng-template #noPG13>
  //     <div>Bạn không thể xem nội dung PG-13</div>
  //   </ng-template>
  // `,
})
export class IfElseComponent {
  user = {
    name: 'Hieu Tran',
    age: 20,
  };
}
