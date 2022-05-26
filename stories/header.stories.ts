import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { HeaderComponent, HeaderModule } from 'cu-ng-design-library';

// import  HeaderDocumentation from './Header.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [HeaderModule],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: HeaderDocumentation,
  //   },
  // },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
} as Partial<HeaderComponent>;
