import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatListModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class MobileMenuModule {}
