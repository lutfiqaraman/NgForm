import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      reactive_username: new FormControl(''),
      reactive_ssn:      new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

}
