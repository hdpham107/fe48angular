import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() name: string;
  @Input() validator: any;

  message = {
    taiKhoan: {
      required: 'Tài Khoản không được để trống',
      minlength: 'Tài khoản phải có ít nhất 5 ký tự',
    },
    matKhau: { required: 'Mật khẩu không được để trống' },
    email: {
      required: 'Email không được để trống',
      pattern: 'Email không hợp lệ',
    },
    soDt: { required: 'Số điện thoại không được để trống' },
    hoTen: { required: 'Họ tên không được để trống' },
  };

  constructor() {}

  ngOnInit(): void {}
}
