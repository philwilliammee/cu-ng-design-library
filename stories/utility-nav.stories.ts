import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { UtilityNavComponent, UtilityNavModule } from 'cu-ng-design-library';

// import  UtilityNavDocumentation from './UtilityNav.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/UtilityNav',
  component: UtilityNavComponent,
  decorators: [
    moduleMetadata({
      imports: [UtilityNavModule],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: UtilityNavDocumentation,
  //   },
  // },
} as Meta;

const Template: Story<UtilityNavComponent> = (args: UtilityNavComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<UtilityNavComponent>;
