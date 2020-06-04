import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/bootstrap-4.5.0-dist/css/bootstrap.min.css']
})
export class AppGroceryComponent {
  task: string;
  tasks = [];

  onClick(){
    this.tasks.push({name: this.task});
  this.task = '';
}
}
