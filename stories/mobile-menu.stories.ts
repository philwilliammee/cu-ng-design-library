import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  MobileDialogModule,
  MobileMenuComponent,
  MobileMenuModule,
} from 'cu-ng-design-library';
import { routes, RoutsModule } from './Routes';
// import MobileMenuDocumentation from './MobileMenu.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/MobileMenu',
  component: MobileMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [MobileMenuModule, MobileDialogModule, RoutsModule],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: MobileMenuDocumentation,
  //   },
  // },
} as Meta;

const Template: Story<MobileMenuComponent> = (args: MobileMenuComponent) => ({
  props: args,
  template: `
  <lib-mobile-menu [routes]="routes">
  </lib-mobile-menu>
  <router-outlet></router-outlet>
  `,
});

export const Default = Template.bind({});

Default.args = {
  routes: routes,
} as Partial<MobileMenuComponent>;
