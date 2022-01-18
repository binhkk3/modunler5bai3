import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../model/Product";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
  // @ts-ignore
  listProduct2: Product[] = [
    {
      id:'1',
      name:'ipone13',
      price:'14124',
    },
    {
      id:'2',
      name:'ipone23',
      price:'14324',
    },
    {
      id:'3',
      name:'ipone63',
      price:'14424',
    },
  ]

  formGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }
  callingFunction() {
    console.log(this.formGroup.value)
    this.listProduct2.push(this.formGroup.value)
  }

}
