import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BootchapComponent } from './bootstrap1/bootchap.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorComponent } from './color/color.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { NameCardComponent } from './name-card/name-card.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';
import { DemoComponent } from './demo/demo.component';
import { Product2Component } from './product2/product2.component';
import { StudentComponent } from './student/student.component';
import { TodoComponent } from './todo/todo.component';
import { RegisteComponent } from './registe/registe.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    BootchapComponent,
    BootstrapComponent,
    ProductComponent,
    CalculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    NameCardComponent,
    EmployeeComponent,
    FormComponent,
    DemoComponent,
    Product2Component,
    StudentComponent,
    TodoComponent,
    RegisteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
