import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  btnInvalid: boolean = true;
  btnValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(20)
    ], []),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ], []),

    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(500)
    ], []),

    checkbox: new FormControl('', [
      Validators.requiredTrue
    ], [])
  })
}
