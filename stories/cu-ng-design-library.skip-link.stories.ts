import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  SkipLinkComponent,
  SkipLinkModule,
} from 'cu-ng-design-library';

import  SkipLinkDocumentation from './skip-link.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/SkipLink',
  component: SkipLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [SkipLinkModule],
    }),
  ],
  parameters: {
    docs: {
      page: SkipLinkDocumentation,
    },
  },
} as Meta;

const Template: Story<SkipLinkComponent> = (args: SkipLinkComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<SkipLinkComponent>;
