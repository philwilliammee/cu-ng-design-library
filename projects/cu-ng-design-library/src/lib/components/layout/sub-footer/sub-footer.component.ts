import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubFooterComponent {
  // deprecated
  @Input() isMobileLayout?: boolean;
  @Input()
  message = `If you have a disability and are having trouble accessing information on this website or need materials in an alternate format, contact <a href="mailto:web-accessibility@cornell.edu">web-accessibility@cornell.edu</a> for assistance.`;
  constructor() {
    if (this.isMobileLayout !== undefined) {
      console.log(
        "isMobileLayout is deprecated. Use the 'mobile' class on the host element instead."
      );
    }
  }
}
