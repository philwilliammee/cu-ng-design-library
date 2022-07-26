import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule, BrowserModule, MatToolbarModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AdminToolbarModule {}
