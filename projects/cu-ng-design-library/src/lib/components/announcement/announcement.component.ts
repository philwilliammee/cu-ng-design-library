import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

export interface Announcement {
  title?: string;
  icon?: 'notifications' | 'error' | 'info' | 'success';
}

@Component({
  selector: 'lib-announcement',
  template: `
    <mat-toolbar *ngIf="announcement">
      <div class="container-fluid" style="width:100%;">
        <div class="flex">
          <mat-icon class="mr-2">{{
            announcement.icon || 'notifications'
          }}</mat-icon>
          <div *ngIf="announcement.title">{{ announcement.title }}</div>
          <ng-content></ng-content>
          <div class="grow"></div>
          <div *ngIf="isClosable">
            <button
              mat-icon-button
              aria-label="close"
              (click)="handleCloseClick()"
            >
              <mat-icon>close</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .flex {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      .grow {
        flex: 1;
      }
      .mat-toolbar {
        background-color: #2d668e;
        color: white;
        white-space: normal;
        height: auto;
        padding: 16px;
      }

      .mr-2 {
        margin-right: 16px;
      }
    `,
  ],
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement?: Announcement;
  @Input() isClosable = true;

  ngOnInit() {
    console.log(this.announcement);
  }

  handleCloseClick() {
    this.announcement = undefined;
  }
}
