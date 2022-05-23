import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MainFooterComponent, MainFooterModule } from 'cu-ng-design-library';

// import  MainFooterDocumentation from './MainFooter.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/MainFooter',
  component: MainFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [MainFooterModule],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: MainFooterDocumentation,
  //   },
  // },
} as Meta;

const Template: Story<MainFooterComponent> = (args: MainFooterComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<MainFooterComponent>;
