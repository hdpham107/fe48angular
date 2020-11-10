import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor() {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      matKhau: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  handleSignin() {
    this.signinForm.markAllAsTouched();
    if (this.signinForm.invalid) {
      return;
    }

    console.log(this.signinForm.value);
  }
}
