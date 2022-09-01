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
        options: ['cu-default', 'cu-red', 'cu-black', 'cu-gray'],
      },
    },
    logo: {
      control: {
        type: 'select',
        options: ['cu-seal', 'cu-45'],
      },
    },
    useGradient: {
      control: {
        type: 'boolean',
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

const CustomTemplate: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
  template: `
  <lib-header [subtitle]="subtitle" [theme]="theme" [logo]="logo" [useGradient]="useGradient">
    <div unit-title>
      <a href="#"><h2 class="h3">CU-NG-Design-Library</h2></a>
    </div>
  </lib-header>
  `,
});

export const Cu45Default = Template.bind({});

export const Cu45Gray = Template.bind({});

export const Cu45Red = Template.bind({});

export const Cu45Black = Template.bind({});

export const SealDefault = Template.bind({});

export const SealGray = Template.bind({});

export const SealRed = Template.bind({});

export const SealBlack = Template.bind({});

export const Custom = CustomTemplate.bind({});

SealDefault.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  theme: 'cu-default',
  logo: 'cu-seal',
  useGradient: false,
} as Partial<HeaderComponent>;

SealGray.args = {
  ...SealDefault.args,
  theme: 'cu-gray',
  useGradient: true,
} as Partial<HeaderComponent>;

SealRed.args = {
  ...SealDefault.args,
  theme: 'cu-red',
  useGradient: true,
} as Partial<HeaderComponent>;

SealBlack.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  theme: 'cu-black',
  logo: 'cu-seal',
} as Partial<HeaderComponent>;

Cu45Default.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  theme: 'cu-default',
  logo: 'cu-45',
} as Partial<HeaderComponent>;

Cu45Red.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  theme: 'cu-red',
  logo: 'cu-45',
} as Partial<HeaderComponent>;

Cu45Black.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  theme: 'cu-black',
  logo: 'cu-45',
} as Partial<HeaderComponent>;

Cu45Gray.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  theme: 'cu-gray',
  logo: 'cu-45',
} as Partial<HeaderComponent>;

Custom.args = {
  subtitle: 'Example of a custom linked title',
  theme: 'cu-red',
  logo: 'cu-45',
} as Partial<HeaderComponent>;
