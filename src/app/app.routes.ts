import { Routes } from '@angular/router';
import { LayoutParentComponent } from './layout/layout-parent/layout-parent.component';

export const routes: Routes = [
  //   {
  //     path: 'login',
  //     loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  //   },
  {
    path: '',
    component: LayoutParentComponent,
    children: [
      // TODO: Add child routes here for dashboard, users, settings, etc.
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
