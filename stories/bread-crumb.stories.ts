import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BreadCrumbComponent, BreadCrumbModule } from 'cu-ng-design-library';
import GenericComponent from './generic.component';

export default {
  title: 'CU-NG-Design-Library/Components/BreadCrumb',
  component: GenericComponent,
  decorators: [
    moduleMetadata({
      declarations: [BreadCrumbComponent],
      imports: [BreadCrumbModule],
    }),
  ],
} as Meta;

const Template: Story<GenericComponent> = (args: GenericComponent) => ({
  props: args,
  template: `
  <lib-bread-crumb>
  <a href="# ">Home</a> / <a href="# ">Page</a> / <a href="# ">Sub Page</a> / <a href="# ">Current Page</a>
  </lib-bread-crumb>
  `,
});

export const Default = Template.bind({});

Default.args = {
  'bread-crumb': {
    title: 'BreadCrumb Title two',
  },
} as Partial<GenericComponent>;
