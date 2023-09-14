import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  user = {
    name: 'Hieu Tran',
    age: 20,
  };
  showInfo() {
    alert('Hello Hieu Tran');
  }
  obj = {
    type: 'text',
    value: 'something',
    attributes: [], // thuộc type NamedNodeMap, dạng như một array
    // … các thuộc tính, method khác
  };
}
