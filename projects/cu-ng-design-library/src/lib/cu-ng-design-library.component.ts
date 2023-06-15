import { Component } from '@angular/core';

/**
 * We are moving away from useMobileLayout instead we will show and hide using css
 */
@Component({
  selector: 'lib-cu-ng-design-library',
  template: `
    <div class="wrapper">
      <ng-content select="[header]"></ng-content>
      <ng-content select="[main-menu]"></ng-content>
      <div class="main-wrapper">
        <router-outlet></router-outlet>
      </div>
      <ng-content select="[secondary]"></ng-content>
      <ng-content select="[footer]"></ng-content>
    </div>
  `,
  styles: [
    `
      .wrapper {
        min-height: 100vh;
        margin: 0;
        display: flex;
        flex-direction: column;
      }

      .main-wrapper {
        flex: 1;
      }

      @media screen and (max-width: 768px) {
        .mobile-hidden {
          display: none;
        }
      }
    `,
  ],
})
export class CuNgDesignLibraryComponent {}
