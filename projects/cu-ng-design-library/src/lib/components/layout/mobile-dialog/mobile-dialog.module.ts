import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MobileDialogComponent } from '../mobile-dialog/mobile-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CWD_BREAKPOINTS } from '../../../cu-ng-design-library.breakpoints';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    BrowserModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: true }, CWD_BREAKPOINTS),
  ],
  exports: [
    // MatDialogModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    MatButtonModule,
    // RouterModule,
    // BrowserModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class MobileDialogModule {}
