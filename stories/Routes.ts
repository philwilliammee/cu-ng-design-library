import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'cu-ng-design-library';
import { SubFooterComponent } from 'cu-ng-design-library';

export const routes: Routes = [
  { path: '', redirectTo: 'header-component', pathMatch: 'full' },
  {
    path: 'header-component',
    component: HeaderComponent,
    data: { menu: 'main' },
  },
  {
    path: 'sub-footer-component',
    component: SubFooterComponent,
    data: { menu: 'main' },
  },
  { path: 'utility', component: SubFooterComponent, data: { menu: 'utility' } },
  { path: '**', redirectTo: 'header-component', pathMatch: 'full' },
];

export const RoutsModule = RouterModule.forRoot(routes);
