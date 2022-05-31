import { RouterModule, Routes } from '@angular/router';
import { TwoColumnComponent, OneColumnComponent } from 'cu-ng-design-library';

export const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  {
    path: 'template',
    component: TwoColumnComponent,
    data: { menu: 'main', title: 'Template' },
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
        component: TwoColumnComponent,
        data: {
          menu: 'dropdown',
          title: 'Two Column Page',
        },
      },
      {
        path: 'nested2',
        component: OneColumnComponent,
        data: {
          menu: 'one-column',
          title: 'One Column Page',
        },
      },
    ],
  },

  {
    path: 'utility',
    component: OneColumnComponent,
    data: { menu: 'utility', title: 'Utility Page' },
  },
  { path: '**', redirectTo: 'template', pathMatch: 'full' },
];

export const RoutesModule = RouterModule.forRoot(routes);
