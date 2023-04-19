import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        RouterModule,
        BrowserModule,
    ],
    exports: [
        MatIconModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        RouterModule,
        BrowserModule,
        FlexLayoutModule,
        MatListModule,
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class MobileMenuModule {}
