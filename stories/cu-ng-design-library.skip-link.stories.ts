import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  SkipLinkComponent,
  CuNgDesignLibraryModule,
} from 'cu-ng-design-library';

export default {
  title: 'Example/SkipLink',
  component: SkipLinkComponent,
  // decorators: [
  //   moduleMetadata({
  //     imports: [CuNgDesignLibraryModule],
  //   }),
  // ],
  parameters: {
    docs: {
      page: null,
    },
  },
} as Meta;

const Template: Story<SkipLinkComponent> = (args: SkipLinkComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<SkipLinkComponent>;
