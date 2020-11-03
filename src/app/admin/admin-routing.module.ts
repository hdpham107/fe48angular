import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', // <=> /admin
    component: LayoutComponent,
    children: [
      {
        path: '', // <=> /admin
        redirectTo: 'movies',
      },
      {
        path: 'users', // <=> /admin/users
        component: UsersComponent,
      },
      { path: 'movies', component: MoviesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
