import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm: NgForm;
  constructor() { }

  ngOnInit(): void { }

  // kiểm tra form có thay đổi
  checkDirty(): boolean {
    // để lấy được signupForm từ file HTML thì dùng kỹ thuật ViewChild
    // tại các tag HTML muốn viewChild thì đặt cho nó 1 tham chiếu
    // tại thẻ form đã có tham chiếu #signupForm rồi

    return this.signupForm.dirty && !this.signupForm.submitted;
  }

  handleSignup(signupForm: NgForm) {
    // Kiểm tra nếu form không hợp lệ => kết thúc hàm
    if (signupForm.invalid) {
      return;
    }

    console.log(signupForm.value);
  }
}
