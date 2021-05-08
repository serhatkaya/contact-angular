import { MasterComponent } from './../core/layout/master-component/master-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login',
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../main/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../main/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '/login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
