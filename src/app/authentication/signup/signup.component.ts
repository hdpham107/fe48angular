import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleSignup(signupForm: NgForm) {
    // Kiểm tra nếu form không hợp lệ => kết thúc hàm
    if (signupForm.invalid) {
      return;
    }

    console.log(signupForm.value);
  }
}
