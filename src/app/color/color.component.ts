import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  mau="233443(23,34,43)"

  constructor() { }


  ngOnInit(): void {
  }
  maudo(){
    this.mau="red";
  }
  mauvang(){
    this.mau="yellow";
  }
 mauxanh(){
    this.mau="blue";
 }

}
