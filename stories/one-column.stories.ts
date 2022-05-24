import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  MainComponent,
  OneColumnComponent,
  OneColumnModule,
} from 'cu-ng-design-library';

// import OneColumnDocumentation from './OneColumn.mdx';

export default {
  title: 'CU-NG-Design-Library/Pages/OneColumn',
  component: OneColumnComponent,
  decorators: [
    moduleMetadata({
      imports: [OneColumnModule],
      declarations: [MainComponent],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: OneColumnDocumentation,
  //   },
  // },
} as Meta;

const Template: Story<OneColumnComponent> = (args: OneColumnComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<OneColumnComponent>;
