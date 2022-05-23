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
  ],
  imports: [
    MaterialModule,
    RouterModule,
    BrowserModule,
  ],
  exports: [
    CuNgDesignLibraryComponent,
    SkipLinkComponent,
    FooterComponent,
    SubFooterComponent,
    HeaderComponent,
    MainMenuComponent,
  ]
})
export class CuNgDesignLibraryModule { }
