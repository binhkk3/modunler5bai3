import {Component, OnInit} from '@angular/core';
import {Usr} from "../../model/usr";
import {stringify} from "@angular/compiler/src/util";
import {UesrService} from "../../service/uesr.service";
import {ActivatedRoute} from "@angular/router";
import {id} from "date-fns/locale";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  user: Usr = {};

  constructor(private userService: UesrService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,) {
  }

  userForm: FormGroup = this.fb.group({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    acreage: new FormControl('', [Validators.required]),
    population: new FormControl('', [Validators.required]),
    gdp: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
        const id = (paramap.get('id'));
        // @ts-ignore
        this.userService.getById(id).subscribe(result => {
          console.log(result)
          this.user = result;
          this.userForm = this.fb.group({
            id: new FormControl(result.id, [Validators.required]),
            name: new FormControl(result.name, [Validators.required]),
            acreage: new FormControl(result.acreage, [Validators.required]),
            population: new FormControl(result.population, [Validators.required]),
            gdp: new FormControl(result.gdp, [Validators.required]),
            description: new FormControl(result.description, [Validators.required]),
          })
        })
      }
    )

  }

  updateUserProfile() {
    const user = this.userForm.value;
    console.log(user);
    // @ts-ignore
    this.userService.updateUserProfile(this.user.id, user).subscribe(() => {
      alert("thanh coong")
    })


  }
  delete(){
// @ts-ignore
    this.userService.delete(this.user.id).subscribe(() =>{
  alert("thanh cong3");
})
  }

}
