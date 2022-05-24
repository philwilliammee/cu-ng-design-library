import OneColPageComponent from './one-col-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TwoColumnComponent, OneColumnComponent } from 'cu-ng-design-library';

export const routes: Routes = [
  { path: '', redirectTo: 'two-col-page', pathMatch: 'full' },
  {
    path: 'two-col-page',
    component: TwoColumnComponent,
    data: { menu: 'main' },
  },
  {
    path: 'one-col-page',
    component: OneColumnComponent,
    data: { menu: 'main' },
  },

  {
    path: 'utility',
    component: OneColPageComponent,
    data: { menu: 'utility' },
  },
  { path: '**', redirectTo: 'two-col-page', pathMatch: 'full' },
];

export const RoutesModule = RouterModule.forRoot(routes);
