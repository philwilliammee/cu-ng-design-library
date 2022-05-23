import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MainComponent, MainModule } from 'cu-ng-design-library';

// import  MainDocumentation from './Main.mdx';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/Main',
  component: MainComponent,
  decorators: [
    moduleMetadata({
      imports: [MainModule],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: MainDocumentation,
  //   },
  // },
} as Meta;

const Template: Story<MainComponent> = (args: MainComponent) => ({
  props: args,
  template: `
  <lib-main>
    <h2>Lib-Main - The main content container</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat illo cum maxime consequatur error delectus pariatur amet nobis labore, eos, deserunt mollitia laboriosam. Explicabo fuga ullam sunt libero accusamus ab.</p>
  </lib-main>`,
});

export const Default = Template.bind({});

Default.args = {} as Partial<MainComponent>;
