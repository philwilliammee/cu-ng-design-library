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
  template: `
  <lib-main-footer>
  <div primary>
    <p>
      Security Notice: To fully clear Cornell login credentials, exit or quit this browser, including any other open tabs.
    </p>
  </div>
  <div secondary>
    <h2 class="h5">Student &amp; Campus Life</h2>
    <p>311 Day Hall<br>
      Cornell University<br>
      Ithaca, NY 14853</p>
    </div>
  </lib-main-footer>
  `,
});

export const Default = Template.bind({});

Default.args = {} as Partial<MainFooterComponent>;
