import { Component } from '@angular/core';

@Component({
  selector: 'lib-loading',
  template: `
    <div class="loading">
      <div class="loading-spinner">
        <mat-spinner></mat-spinner>
      </div>
    </div>
  `,
  styles: [
    `
      .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
      }

      .loading-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100px;
        width: 100px;
      }
    `,
  ],
})
export class LoadingComponent {}
