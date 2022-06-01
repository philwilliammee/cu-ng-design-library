import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Routes } from '@angular/router';
import { MobileDialogComponent } from '../mobile-dialog/mobile-dialog.component';

@Component({
  selector: 'lib-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  showFiller = false;
  @Input() routes!: Routes;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(MobileDialogComponent, {
      backdropClass: 'mobile-dialog-backdrop',
      position: {
        top: '0',
        left: '0',
      },
      width: '100vw',
      maxWidth: '100vw',
      panelClass: 'mobile-dialog',
      data: {
        routes: this.routes,
      },
    });
  }

  ngOnInit(): void {}
}
