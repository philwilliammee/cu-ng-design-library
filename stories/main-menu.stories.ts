import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MainMenuComponent, MainMenuModule } from 'cu-ng-design-library';
//import { MainMenuComponent, MainMenuModule } from 'projects/cu-ng-design-library/src/public-api';
import { routes, RoutsModule } from './Routes';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/MainMenu',
  component: MainMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [MainMenuModule, RoutsModule],
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
  routes: routes,
} as Partial<MainMenuComponent>;
