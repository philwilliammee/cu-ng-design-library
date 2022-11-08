// import { LoadingComponent } from './../projects/cu-ng-design-library/src/lib/components/loading/loading.component';
import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { LoadingComponent, LoadingModule } from 'cu-ng-design-library';

import LoadingDocumentation from './skip-link.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Loading',
  component: LoadingComponent,
  decorators: [
    moduleMetadata({
      imports: [LoadingModule],
    }),
  ],
  parameters: {
    docs: {
      page: LoadingDocumentation,
    },
  },
} as Meta;

const Template: Story<LoadingComponent> = (args: LoadingComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<LoadingComponent>;
