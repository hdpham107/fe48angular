import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// cli tạo: ng g guard admin
// chọn CanActive
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }

  // Trước khi truy cập vào page, nó sẽ chạy vào trong AdminGuard
  // và vào trong hàm canActivate kiểm tra
  // return true => cho phép truy cập và ngược lại
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = localStorage.getItem('user');
    // kiểm tra
    // 1. co dang nhap chua
    // 2. ma loai nguoi dung co phai la Quan Tri hay khong
    if (user) {
      const { maLoaiNguoiDung } = JSON.parse(user);
      if (maLoaiNguoiDung === 'QuanTri') {
        // Đã đăng nhập và là QuanTri => cho phép truy cập
        return true;
      }
      // Đã đăng nhập mà là KhachHang => redirect về trang Home
      // để navigate trong file ts thì phải import gói Router
      this.router.navigate(['/']);
      return false;
    }

    // chưa đăng nhập => navigate về trang Signin
    this.router.navigate(['/signin']);
    return false;
  }

}
