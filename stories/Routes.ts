import { RouterModule, Routes } from '@angular/router';
import { TwoColumnComponent, OneColumnComponent } from 'cu-ng-design-library';

export const routes: Routes = [
  { path: '', redirectTo: 'two-col-page', pathMatch: 'full' },
  {
    path: 'two-col-page',
    component: TwoColumnComponent,
    data: { menu: 'main', title: 'Two Column Page' },
  },
  {
    path: 'one-col-page',
    component: OneColumnComponent,
    data: {
      menu: 'main',
      title: 'One Column Page',
    },
    children: [
      {
        path: 'nested',
        component: TwoColumnComponent,
        data: {
          menu: 'one-col-page',
          title: 'Nested Page',
        },
      },
      {
        path: 'nested2',
        component: OneColumnComponent,
        data: {
          menu: 'one-col-page',
          title: 'Another Nested Page',
        },
      },
    ],
  },

  {
    path: 'utility',
    component: OneColumnComponent,
    data: { menu: 'utility', title: 'Utility Page' },
  },
  // { path: '**', redirectTo: 'two-col-page', pathMatch: 'full' },
];

export const RoutesModule = RouterModule.forRoot(routes);
