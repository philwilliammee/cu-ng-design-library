import { routes, RoutesModule } from './Routes';
import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  CuNgDesignLibraryComponent,
  CuNgDesignLibraryModule,
} from 'cu-ng-design-library';

// import CuNgDesignLibraryDocumentation from './CuNgDesignLibrary.mdx';

export default {
  title: 'CU-NG-Design-Library/Pages/CuNgDesignLibrary',
  component: CuNgDesignLibraryComponent,
  decorators: [
    moduleMetadata({
      imports: [CuNgDesignLibraryModule, RoutesModule],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: CuNgDesignLibraryDocumentation,
  //   },
  // },
  argTypes: {
    routes: {
      control: {
        type: 'array',
      },
    },
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
    // Issue here https://github.com/storybookjs/storybook/issues/14147
    // isMobileLayout: {
    //   control: {
    //     type: 'boolean',
    //   },
    // },
  },
} as Meta;

const Template: Story<CuNgDesignLibraryComponent> = (
  args: CuNgDesignLibraryComponent
) => ({
  props: args,
  template: `
  <lib-cu-ng-design-library>
    <div header>
      <div >
        <a href="#"><h2 class="h3">{{title}}</h2></a>
      </div>
    </div>
    <div content>This is content</div>
    <div footer>This is the footer</div>
  </lib-cu-ng-design-library>
  `,
});

export const Default = Template.bind({});

Default.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  routes: routes,
} as Partial<CuNgDesignLibraryComponent>;
