import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
  ],
  exports : [
    RouterModule,
    BrowserModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class MainMenuModule { }
