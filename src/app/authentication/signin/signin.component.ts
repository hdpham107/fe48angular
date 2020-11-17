import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private auth: AuthenticationService) {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      matKhau: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void { }

  handleSignin() {
    this.signinForm.markAllAsTouched();
    if (this.signinForm.invalid) {
      return;
    }

    console.log(this.signinForm.value);

    this.auth.signin(this.signinForm.value).subscribe({
      next: (result) => {
        localStorage.setItem('user', JSON.stringify(result))

      }
    })
  }
}
