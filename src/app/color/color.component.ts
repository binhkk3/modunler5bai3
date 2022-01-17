import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  a = 1
  b = 1
  c = 1

  mau = `'rgb('`+`${this.a}`+`','`+`${this.b}`+`','`+`${this.c}`+`'
  )'`;
  constructor() {
  }


  ngOnInit(): void {
  }

  maudo() {
    this.mau = "red";
  }

  mauvang() {
    this.mau = "yellow";
  }

  mauxanh() {
    this.mau = "blue";
  }

}
