import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    RouterModule,
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class MainMenuModule {}
