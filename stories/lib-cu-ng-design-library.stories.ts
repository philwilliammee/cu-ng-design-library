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
} as Meta;

const Template: Story<CuNgDesignLibraryComponent> = (
  args: CuNgDesignLibraryComponent
) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
  title: 'CU-NG-Design-Library',
  subtitle: 'A library of reusable components for the CU-Community-Apps',
  routes: routes,
} as Partial<CuNgDesignLibraryComponent>;
