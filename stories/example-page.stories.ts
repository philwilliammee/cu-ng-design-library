import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
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
import { routes, RoutesModule } from './Routes';

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
        RoutesModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<GenericComponent> = (args: GenericComponent) => ({
  props: args,
  template: `
  <lib-skip-link></lib-skip-link>
<lib-header title="Example Title" subtitle="A short description usually longer than the title">
  <lib-header-buttons>
    <lib-utility-nav></lib-utility-nav>
    <lib-mobile-menu [routes]="routes"></lib-mobile-menu>
  </lib-header-buttons>
</lib-header>

<lib-main-menu [routes]="routes"></lib-main-menu>

<router-outlet></router-outlet>

<lib-footer>
  <lib-main-footer></lib-main-footer>
  <lib-sub-footer [isMobileLayout]="false"></lib-sub-footer>
</lib-footer>
`,
});

export const Example = Template.bind({});

Example.args = {
  routes: routes,
} as Partial<GenericComponent>;
