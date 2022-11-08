import { Component, Input, OnInit } from '@angular/core';

type AccentOptions =
  | 'blue'
  | 'blue-green'
  | 'gold'
  | 'green'
  | 'purple'
  | 'red';

interface PanelOptions {
  accent?: AccentOptions;
  fill?: boolean;
  heavyTop?: boolean;
  indent?: number;
}

@Component({
  selector: 'lib-alert',
  template: `
    <div class="panel" [ngClass]="generateClassNames()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() options!: PanelOptions | undefined;

  generateClassNames() {
    console.log(this.options);
    if (!this.options) {
      return 'panel-default';
    }

    const classNames = [];
    if (this.options.accent) {
      classNames.push(`accent-${this.options.accent}`);
    }
    if (this.options.fill) {
      classNames.push('fill');
    }
    if (this.options.heavyTop) {
      classNames.push('heavy-top');
    }
    if (this.options.indent) {
      classNames.push(`indent${this.options.indent}`);
    }
    return classNames;
  }
}
