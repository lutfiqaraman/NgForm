import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(dataForm: NgForm) {
    console.log("The username is " + dataForm.value.username);
    console.log("The ssn is " + dataForm.value.ssn);
  }

}
