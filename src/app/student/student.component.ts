import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
listStudent: Student[] = [
  {
    id:'1',
    name:'hs1',
    age:'14124',
  },
  {
    id:'2',
    name:'hs2',
    age:'14324',
  },
  {
    id:'3',
    name:'hoc sinh 3',
    age:'14424',
  },
]
  formGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(18)])
  });
  constructor() { }

  ngOnInit(): void {
  }
  callingFunction() {
    console.log(this.formGroup.value)
    this.listStudent.push(this.formGroup.value)
  }
}
