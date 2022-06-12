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
    <h2 class="h5">Student Services Information Technologies</h2>
    <p>311 Day Hall<br>
      Cornell University<br>
      Ithaca, NY 14853
      </p>
      <p>
        <a mat-button class="link-block" href="#"> Contact SSIT </a>
      </p>
    </div>
  </lib-main-footer>
  `,
});

const TwoColumnTemplate: Story<MainFooterComponent> = (
  args: MainFooterComponent
) => ({
  props: args,
  template: `
  <lib-main-footer>
  <div primary>
  <h2 class="h3 hidden">Quick Links</h2>
    <div class="two-col padded footer-links">
      <div>
        <h3 class="h6">Column Heading</h3>
        <ul class="list-menu vertical">
          <li><a href="#">Link List</a></li>
          <li><a href="#">Another Link</a></li>
          <li><a href="#">A slightly longer link</a></li>
        </ul>
      </div>
      <div>
        <h3 class="h6">Another Column Heading</h3>
        <ul class="list-menu vertical">
          <li><a href="#">Second column Link</a></li>
          <li><a href="#">Another example of a link</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div secondary>
    <h2 class="h5">Student Services Information Technologies</h2>
    <p>311 Day Hall<br>
      Cornell University<br>
      Ithaca, NY 14853</p>
    </div>
  </lib-main-footer>
  `,
});

const ThreeColumnTemplate: Story<MainFooterComponent> = (
  args: MainFooterComponent
) => ({
  props: args,
  template: `
  <lib-main-footer>
  <div primary>
  <h2 class="h3 hidden">Quick Links</h2>
    <div class="three-col padded footer-links">
      <div>
        <h3 class="h6">Column Heading</h3>
        <ul class="list-menu vertical">
          <li><a href="#">Link List</a></li>
          <li><a href="#">Another Link</a></li>
          <li><a href="#">A slightly longer link</a></li>
        </ul>
      </div>
      <div>
        <h3 class="h6">Another Column Heading</h3>
        <ul class="list-menu vertical">
          <li><a href="#">Second column Link</a></li>
          <li><a href="#">Another example of a link</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
      <div>
      <h3 class="h6">Third Column Heading</h3>
      <ul class="list-menu vertical">
        <li><a href="#">Second column Link</a></li>
        <li><a href="#">Another example of a link</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
    </div>
  </div>
  <div secondary>
    <h2 class="h5">Student Services Information Technologies</h2>
    <p>311 Day Hall<br>
      Cornell University<br>
      Ithaca, NY 14853</p>
    </div>
  </lib-main-footer>
  `,
});

export const Default = Template.bind({});
export const TwoColumn = TwoColumnTemplate.bind({});
export const ThreeColumn = ThreeColumnTemplate.bind({});

Default.args = {} as Partial<MainFooterComponent>;
TwoColumn.args = {} as Partial<MainFooterComponent>;
ThreeColumn.args = {} as Partial<MainFooterComponent>;
