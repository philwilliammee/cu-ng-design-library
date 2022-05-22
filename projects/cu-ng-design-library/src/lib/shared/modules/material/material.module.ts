import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
// import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

const materialModules = [
  MatIconModule,
  MatSidenavModule,
  MatDialogModule,
  MatButtonModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
