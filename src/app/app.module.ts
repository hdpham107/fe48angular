import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Module: Là một group các component, thông thường module được đóng gói thành
// 1 chức năng cụ thể, hoặc 1 page
// Ví dụ: HomePageModule quản lý các component: Header, Footer, Sidebar, Content,...

// @NgModule: Khai báo cho angular biết AppModule là 1 module
// Nếu không có @ngModule => AppModule chỉ là 1 class thông thường
@NgModule({
  // declarations: Là nơi khai báo các component do module quản lý
  // AppComponent đang được quản lý bởi AppModule
  // Một component không thể đứng 1 mình, nó phải được quản lý bới 1 module
  declarations: [AppComponent],
  // Trong angular ngoài các module do mình tự tạo, còn các module do angular cung cấp
  // Sử dụng router => RouterModule
  // Sử dụng để gọi api => HTTPClientModule
  // imports: là nơi khai báo các module muốn sử dụng
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  // Nơi khai báo các services
  providers: [],
  // Chỉ khai báo ở AppModule
  // Chỉ định component sẽ khởi chạy đầu tiên
  bootstrap: [AppComponent],
})
export class AppModule {}
