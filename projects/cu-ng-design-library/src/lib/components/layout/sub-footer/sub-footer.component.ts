import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss'],
})
export class SubFooterComponent {
  // deprecated
  @Input() isMobileLayout?: boolean;

  constructor() {
    if (this.isMobileLayout !== undefined) {
      console.log(
        "isMobileLayout is deprecated. Use the 'mobile' class on the host element instead."
      );
    }
  }
}
