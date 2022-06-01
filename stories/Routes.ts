import { TwoColumnExampleComponent } from 'cu-ng-design-library';
import { OneColumnExampleComponent } from 'cu-ng-design-library';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  {
    path: 'template',
    component: TwoColumnExampleComponent,
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

export const RoutesModule = RouterModule.forRoot(routes);
