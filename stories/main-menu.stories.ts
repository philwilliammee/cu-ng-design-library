import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MainMenuComponent, MainMenuModule } from 'cu-ng-design-library';
//import { MainMenuComponent, MainMenuModule } from 'projects/cu-ng-design-library/src/public-api';
import { routes, RoutesModule } from './Routes';
import MainMenuDocument from './main-menu.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/MainMenu',
  component: MainMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [MainMenuModule, RoutesModule],
    }),
  ],
  parameters: {
    docs: {
      page: MainMenuDocument,
    },
  },
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
