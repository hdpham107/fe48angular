import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [UsersComponent, LayoutComponent, MoviesComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
