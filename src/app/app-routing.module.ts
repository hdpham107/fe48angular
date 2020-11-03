import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { DemoComponent } from './demo/demo.component';
// import { Baitap2Component } from './baitap2/baitap2.component';
// import { Baitap6Component } from './baitap6/baitap6.component';

// import { MainModule } from './main/main.module';
// import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  // { path: '', component: DemoComponent },
  // { path: 'baitap2', component: Baitap2Component },
  // { path: 'baitap6', component: Baitap6Component },

  // Gắn MainModule vào trong routes thì không cần phải gắn vào imports
  // { path: 'admin', loadChildren: () => AdminModule },
  // pathMatch: "full" <=> exact bên React
  // { path: '', loadChildren: () => MainModule },

  // Lazy load
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  // Lệnh tạo module kèm theo routing: ng g m ten-module --routing
  // forRoot: chỉ gắn duy nhất ở App-routing.module
  // Những routing module còn lại sử dụng forChild
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
