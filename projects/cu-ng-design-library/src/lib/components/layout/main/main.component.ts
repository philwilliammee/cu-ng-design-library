import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-main',
  template: `
    <div id="main-content" class="band">
      <main
        id="main"
        [ngClass]="['container-fluid', 'aria-target', paddingClass]"
        tabindex="-1"
      >
        <ng-content></ng-content>
      </main>
    </div>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() useTopPadding = true;
  paddingClass = 'padding-top';

  constructor() {
    if (!this.useTopPadding) {
      this.paddingClass = '';
    }
  }
}
