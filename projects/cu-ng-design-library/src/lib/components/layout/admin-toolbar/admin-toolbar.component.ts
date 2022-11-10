import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-admin-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button
        mat-icon-button
        class="matero-toolbar-button"
        *ngIf="showToggle"
        (click)="toggleSidenav.emit()"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <span class="spacer"></span>
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  styleUrls: ['./admin-toolbar.component.scss'],
})
export class AdminToolbarComponent {
  @Input() showToggle = true;
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();
}
