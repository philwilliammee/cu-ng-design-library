import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  FooterComponent,
  FooterModule,
} from 'cu-ng-design-library';

// import  FooterDocumentation from './Footer.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [FooterModule],
    }),
  ],
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
  template: `
  <lib-footer>
  <div class="secondary" style='margin:auto; max-width:90%'>
    <h2>SSIT - The footer content container</h2>
    <p>311 Day Hall<br>Cornell University<br>Ithaca, NY 14853</p>
  </div>
  </lib-footer>`,
});

export const Default = Template.bind({});

Default.args = {

} as Partial<FooterComponent>;
