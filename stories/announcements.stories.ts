import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  AnnouncementComponent,
  AnnouncementModule,
} from 'cu-ng-design-library';
import GenericComponent from './generic.component';

export default {
  title: 'CU-NG-Design-Library/Components/Announcement',
  component: GenericComponent,
  decorators: [
    moduleMetadata({
      declarations: [AnnouncementComponent],
      imports: [AnnouncementModule],
    }),
  ],
} as Meta;

const Template: Story<GenericComponent> = (args: GenericComponent) => ({
  props: args,
  template: `
  <lib-announcement [announcement]="announcement" (onClose)="onClose" >
  </lib-announcement>
  `,
});

export const Default = Template.bind({});

Default.args = {
  announcement: {
    title: 'Announcement Title two',
  },
} as Partial<GenericComponent>;
