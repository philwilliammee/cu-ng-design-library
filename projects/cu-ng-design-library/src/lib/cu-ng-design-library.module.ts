import { NgModule } from '@angular/core';
import { CuNgDesignLibraryComponent } from './cu-ng-design-library.component';
import { SkipLinkComponent } from './components/layout/skip-link/skip-link.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SubFooterComponent } from './components/layout/sub-footer/sub-footer.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainMenuComponent } from './components/layout/main-menu/main-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderButtonsComponent } from './components/layout/header-buttons/header-buttons.component';
import { MainComponent } from './components/layout/main/main.component';
import { MainFooterComponent } from './components/layout/main-footer/main-footer.component';
import { PrimaryContentComponent } from './components/layout/primary-content/primary-content.component';
import { SecondaryContentComponent } from './components/layout/secondary-content/secondary-content.component';
import { UtilityNavComponent } from './components/layout/utility-nav/utility-nav.component';
import { MobileDialogComponent } from './components/layout/mobile-dialog/mobile-dialog.component';
import { MobileMenuComponent } from './components/layout/mobile-menu/mobile-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CWD_BREAKPOINTS } from './cu-ng-design-library.breakpoints';
import { TwoColumnComponent } from './pages/two-column/two-column.component';
import { OneColumnComponent } from './pages/one-column/one-column.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    CuNgDesignLibraryComponent,
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
    TwoColumnComponent,
    OneColumnComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: true }, CWD_BREAKPOINTS),
  ],
  exports: [
    CuNgDesignLibraryComponent,
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
    TwoColumnComponent,
    OneColumnComponent,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class CuNgDesignLibraryModule {}
