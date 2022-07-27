import { AdminLayoutComponent } from './../projects/cu-ng-design-library/src/lib/components/layout/admin-layout/admin-layout.component';
import { AdminToolbarComponent } from './../projects/cu-ng-design-library/src/lib/components/layout/admin-toolbar/admin-toolbar.component';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  AdminLayoutModule,
  AdminToolbarModule,
  FooterModule,
  HeaderButtonsModule,
  HeaderModule,
  MainFooterModule,
  MainMenuModule,
  MainModule,
  MobileDialogModule,
  MobileMenuModule,
  PrimaryContentModule,
  SecondaryContentModule,
  SideMenuComponent,
  SideMenuModule,
  SkipLinkModule,
  SubFooterModule,
  TwoColumnModule,
  UtilityNavModule,
} from 'cu-ng-design-library';
import { SkipLinkComponent } from 'cu-ng-design-library';
import { HeaderComponent } from 'cu-ng-design-library';
import { MainComponent } from 'cu-ng-design-library';
import { FooterComponent } from 'cu-ng-design-library';
import { SubFooterComponent } from 'cu-ng-design-library';
import { HeaderButtonsComponent } from 'cu-ng-design-library';
import { MainFooterComponent } from 'cu-ng-design-library';
import { PrimaryContentComponent } from 'cu-ng-design-library';
import { SecondaryContentComponent } from 'cu-ng-design-library';
import { UtilityNavComponent } from 'cu-ng-design-library';
import { MobileDialogComponent } from 'cu-ng-design-library';
import { MobileMenuComponent } from 'cu-ng-design-library';
import { MainMenuComponent } from 'cu-ng-design-library';
import GenericComponent from './generic.component';
import { adminRoutes, AdminRoutesModule } from './Routes';

export default {
  title: 'CU-NG-Design-Library/Pages',
  component: GenericComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        SkipLinkComponent,
        FooterComponent,
        SubFooterComponent,
        HeaderComponent,
        MainMenuComponent,
        HeaderButtonsComponent,
        MainComponent,
        MainFooterComponent,
        PrimaryContentComponent,
        SecondaryContentComponent,
        UtilityNavComponent,
        MobileDialogComponent,
        MobileMenuComponent,
        SideMenuComponent,
        AdminToolbarComponent,
        AdminLayoutComponent,
      ],
      imports: [
        SkipLinkModule,
        FooterModule,
        SubFooterModule,
        HeaderModule,
        MainMenuModule,
        HeaderButtonsModule,
        MainModule,
        MainFooterModule,
        PrimaryContentModule,
        SecondaryContentModule,
        UtilityNavModule,
        MobileDialogModule,
        MobileMenuModule,
        TwoColumnModule,
        SideMenuModule,
        AdminToolbarModule,
        AdminLayoutModule,
        AdminRoutesModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<GenericComponent> = (args: GenericComponent) => ({
  props: args,
  template: `
  <lib-skip-link></lib-skip-link>

<lib-admin-layout [routes]='routes' [toolbarTitle]='toolbarTitle'>
  <div toolbar>
    <button mat-button>Login</button>
  </div>
</lib-admin-layout>

<lib-footer>
  <lib-sub-footer [isMobileLayout]="false"></lib-sub-footer>
</lib-footer>
`,
});

export const Admin = Template.bind({});

Admin.args = {
  routes: adminRoutes,
  toolbarTitle: 'Admin',
} as Partial<GenericComponent>;