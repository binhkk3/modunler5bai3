import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  data : any = 1
  constructor() { }

  ngOnInit(): void {
  }

}
