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
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
      control: {
        type: 'text',
      },
    },
    theme: {
      control: {
        type: 'select',
        options: ['cu-red', 'cu-black', 'cu-gray'],
      },
    },
    logo: {
      control: {
        type: 'select',
        options: ['cu-seal', 'cu-45'],
      },
    },
  },
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

export const Cu45 = Template.bind({});

Default.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  theme: 'cu-gray',
  logo: 'cu-seal',
} as Partial<HeaderComponent>;

Cu45.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  theme: 'cu-red',
  logo: 'cu-45',
} as Partial<HeaderComponent>;
