import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
// import { CWD_BREAKPOINTS } from '../../../cu-ng-design-library.breakpoints';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    // MatDialogModule,
    // CommonModule,
    // BrowserAnimationsModule,
    MatButtonModule,
    // RouterModule,
    // CommonModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class MobileDialogModule {}
