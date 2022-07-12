import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  updateForm: FormGroup;

  constructor() {
    this.updateForm = new FormGroup({
      id: new FormControl(''),
      description: new FormControl(''),
      seller: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  updateEntireForm() {

  }

  updatePartOfTheForm() {

  }

}
