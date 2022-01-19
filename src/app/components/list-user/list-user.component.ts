import { Component, OnInit } from '@angular/core';
import {Usr} from "../../model/usr";
import {UesrService} from "../../service/uesr.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 usrs: Usr[]=[];
  constructor(private userService: UesrService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(result=> {
      this.usrs= result;
      console.log(result);
    },error => {
      console.log(error)
      }
    )
  }

}
