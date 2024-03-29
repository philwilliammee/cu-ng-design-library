import { TwoColumnExampleComponent } from 'cu-ng-design-library';
import { OneColumnExampleComponent } from 'cu-ng-design-library';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  {
    path: 'template',
    component: TwoColumnExampleComponent,
    data: { menu: 'main', title: 'Template', class: 'ext-link' },
  },
  {
    path: 'dropdown',
    // component: OneColumnComponent,
    data: {
      menu: 'main',
      title: 'Dropdown',
    },
    children: [
      {
        path: 'two-column',
        component: TwoColumnExampleComponent,
        data: {
          menu: 'dropdown',
          title: 'Two Column Page',
        },
      },
      {
        path: 'nested2',
        component: OneColumnExampleComponent,
        data: {
          menu: 'one-column',
          title: 'One Column Page',
        },
      },
    ],
  },

  {
    path: 'utility',
    component: OneColumnExampleComponent,
    data: { menu: 'utility', title: 'Utility Page' },
  },
  { path: '**', redirectTo: 'template', pathMatch: 'full' },
];

export const adminRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: TwoColumnExampleComponent,
    data: { menu: 'admin', title: 'Dashboard', icon: 'dashboard' },
  },
  {
    path: 'parent',
    component: OneColumnExampleComponent,
    data: {
      menu: 'admin',
      title: 'Parent',
      icon: 'comment',
    },
    children: [
      {
        path: 'child',
        component: OneColumnExampleComponent,
        data: {
          menu: 'admin',
          title: 'Nested Child',
          icon: 'forum',
        },
      },
    ],
  },

  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

export const AdminRoutesModule = RouterModule.forRoot(adminRoutes);

export const RoutesModule = RouterModule.forRoot(routes);
