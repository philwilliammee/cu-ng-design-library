import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  MainComponent,
  PrimaryContentComponent,
  SecondaryContentComponent,
  TwoColumnComponent,
  TwoColumnModule,
} from 'cu-ng-design-library';

// import TwoColumnDocumentation from './TwoColumn.mdx';

export default {
  title: 'CU-NG-Design-Library/Pages/TwoColumn',
  component: TwoColumnComponent,
  declarations: [],
  decorators: [
    moduleMetadata({
      imports: [TwoColumnModule],
      declarations: [
        MainComponent,
        PrimaryContentComponent,
        SecondaryContentComponent,
      ],
    }),
  ],
} as Meta;

const Template: Story<TwoColumnComponent> = (args: TwoColumnComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<TwoColumnComponent>;
