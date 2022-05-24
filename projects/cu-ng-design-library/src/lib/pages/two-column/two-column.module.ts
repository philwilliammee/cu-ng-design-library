import { MainModule } from './../../components/layout/main/main.module';
import { SecondaryContentComponent } from './../../components/layout/secondary-content/secondary-content.component';
import { PrimaryContentComponent } from './../../components/layout/primary-content/primary-content.component';
import { MainComponent } from './../../components/layout/main/main.component';
import { MatIcon } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [FlexLayoutModule],
})
export class TwoColumnModule {}
