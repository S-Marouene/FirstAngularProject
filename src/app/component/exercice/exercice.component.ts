import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  constructor() { }
  newcolor="blue";

  ChangeColor(color:string){
    this.newcolor=color;
  }

  ngOnInit(): void {
  }

}
