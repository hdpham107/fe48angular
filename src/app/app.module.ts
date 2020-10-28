import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { HomeModule } from './home/home.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DirectivesModule } from './directives/directives.module';
import {Baitap6Module} from './baitap6/baitap6.module'

// Module: Là một group các component, thông thường module được đóng gói thành
// 1 chức năng cụ thể, hoặc 1 page
// Ví dụ: HomePageModule quản lý các component: Header, Footer, Sidebar, Content,...

// @NgModule: Khai báo cho angular biết AppModule là 1 module
// Nếu không có @ngModule => AppModule chỉ là 1 class thông thường
@NgModule({
  // declarations: Là nơi khai báo các component do module quản lý
  // AppComponent đang được quản lý bởi AppModule
  // Một component không thể đứng 1 mình, nó phải được quản lý bới 1 module
  declarations: [AppComponent, DemoComponent],
  // Trong angular ngoài các module do mình tự tạo, còn các module do angular cung cấp
  // Sử dụng router => RouterModule
  // Sử dụng để gọi api => HTTPClientModule
  // imports: là nơi khai báo các module muốn sử dụng
  imports: [
    BrowserModule,
    HomeModule,
    Baitap2Module,
    FormsModule,
    DirectivesModule,
    Baitap6Module
  ],
  // Nơi khai báo các services
  providers: [],
  // Chỉ khai báo ở AppModule
  // Chỉ định component sẽ khởi chạy đầu tiên
  bootstrap: [AppComponent],
})
export class AppModule {}
