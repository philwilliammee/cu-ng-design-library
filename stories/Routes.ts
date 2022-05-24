import OneColPageComponent from './one-col-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'cu-ng-design-library';
import { SubFooterComponent } from 'cu-ng-design-library';
import TwoColPageComponent from './two-col-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'two-col-page', pathMatch: 'full' },
  {
    path: 'two-col-page',
    component: TwoColPageComponent,
    data: { menu: 'main' },
  },
  {
    path: 'one-col-page',
    component: OneColPageComponent,
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
