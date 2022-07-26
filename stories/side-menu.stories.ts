import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SideMenuComponent, SideMenuModule } from 'cu-ng-design-library';
import { adminRoutes, AdminRoutesModule } from './Routes';

export default {
  title: 'CU-NG-Design-Library/Components/Layout/SideMenu',
  component: SideMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [SideMenuModule, AdminRoutesModule],
    }),
  ],
  // parameters: {
  //   docs: {
  //     page: MainMenuDocument,
  //   },
  // },
} as Meta;

const Template: Story<SideMenuComponent> = (args: SideMenuComponent) => ({
  props: args,
  template: `
  <lib-side-menu [routes]="routes">
    <router-outlet></router-outlet>
  </lib-side-menu>
  `,
});

export const Default = Template.bind({});

Default.args = {
  routes: adminRoutes,
} as Partial<SideMenuComponent>;
