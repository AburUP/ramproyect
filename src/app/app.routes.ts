import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'userlist',
    pathMatch: 'full',
  },
  {
    path: 'userlist',
    loadComponent: () => import('./userlist/userlist.page').then( m => m.userlistPage)
  },
  {
    path: 'profile/:id',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
];
