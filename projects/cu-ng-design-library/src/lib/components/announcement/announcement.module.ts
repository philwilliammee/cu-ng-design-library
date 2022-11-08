import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule],
  imports: [CommonModule],
})
export class AnnouncementModule {}
