import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tong(){
    // @ts-ignore
    let number1 = +document.getElementById("number1").value;
    // @ts-ignore
    let number2 = +document.getElementById("number2").value;

    // @ts-ignore
    document.getElementById("ketqua").innerHTML= number1 + number2;
  }
  tich(){
    // @ts-ignore
    let number1 = +document.getElementById("number1").value;
    // @ts-ignore
    let number2 = +document.getElementById("number2").value;
    let kq = number1*number2
    // @ts-ignore
    document.getElementById("ketqua").innerHTML=kq;
  }
  thuong(){
    // @ts-ignore
    let number1 = +document.getElementById("number1").value;
    // @ts-ignore
    let number2 = +document.getElementById("number2").value;
    // @ts-ignore
    let kq = number1/number2
    // @ts-ignore
    document.getElementById("ketqua").innerHTML=kq.toFixed(2);
  }

}
