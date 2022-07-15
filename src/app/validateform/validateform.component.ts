import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-validateform',
  templateUrl: './validateform.component.html',
  styleUrls: ['./validateform.component.css']
})
export class ValidateformComponent implements OnInit {

  ssnForm: FormGroup;

  constructor() {
    this.ssnForm = new FormGroup({
      username: new FormControl('', Validators.required),
      ssn: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.ssnForm.get('username')!;
  }

}
