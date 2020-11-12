import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // Dùng BehaviorSubject để có cơ chế theo dõi sự thay đổi của biến currentUser
  currentUser = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  signin(values: any): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';

    return this.http.post(url, values);
  }

  signup(values: any): Observable<any> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';

    return this.http.post(url, { ...values, maNhom: 'GP01' });
  }
}
