import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  SubFooterComponent,
  SubFooterModule,
} from 'cu-ng-design-library';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// import  SubFooterDocumentation from './SubFooter.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/SubFooter',
  component: SubFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [SubFooterModule],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: SubFooterDocumentation,
  //   },
  // },
} as Meta;

const Template: Story<SubFooterComponent> = (args: SubFooterComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<SubFooterComponent>;
