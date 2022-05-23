import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MainMenuComponent, MainMenuModule } from 'cu-ng-design-library';
//import { MainMenuComponent, MainMenuModule } from 'projects/cu-ng-design-library/src/public-api';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'cu-ng-design-library';
import { SubFooterComponent } from 'cu-ng-design-library';

export const routes: Routes = [
  { path: '', redirectTo: 'header-component', pathMatch: 'full' },
  { path: 'header-component', component: HeaderComponent, data: {'menu': 'main'} },
  { path: 'sub-footer-component', component: SubFooterComponent, data: {'menu': 'main'} },
  { path: 'utility', component: SubFooterComponent, data: {'menu': 'utility'} },
  { path: '**', redirectTo: 'header-component', pathMatch: 'full' },
];

export default {
  title: 'CU-NG-Design-Library/Components/Layout/MainMenu',
  component: MainMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [MainMenuModule, RouterModule.forRoot(routes)],
    }),
  ],
} as Meta;

const Template: Story<MainMenuComponent> = (args: MainMenuComponent) => ({
  props: args,
  template: `
  <lib-main-menu [routes]="routes">
  </lib-main-menu>
  <router-outlet></router-outlet>
  `,
});

export const Default = Template.bind({});

Default.args = {
  routes: routes
} as Partial<MainMenuComponent>;
