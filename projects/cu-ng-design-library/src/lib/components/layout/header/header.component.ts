import { Component, Input, ViewEncapsulation } from '@angular/core';

// Cornell Branding Banner
// .cu-red - Overrides the default light gray banner to be red with white logo. Affects both 45px and Large Seal options.
// .cu-black - Overrides the default light gray banner to be black with white logo. Affects both 45px and Large Seal options.
// .cu-gray - Overrides the default light gray banner to be dark gray with white logo. Affects both 45px and Large Seal options.
// .cu-45 - Renders as a ~45px banner with small Cornell logo (this is also the default if no body class is defined). Headings appear below the banner. Note: This class is mutually exclusive with .cu-seal.
// .cu-seal - Renders as a taller banner with a large standalone Cornell seal. Headings appear to the right of the seal. Note: This class is mutually exclusive with .cu-45.
// .cu-seal-right - Added to .cu-seal to swap the left and right positions of the seal and headings.
// .cu-45-mobile - Added to .cu-seal to switch to 45px style at mobile sizes.
// .cu-45-mobile-red - Added to .cu-seal-mobile also activate the red color option on the 45px banner at mobile sizes.
// .no-main-nav - When .cu-seal is in use and no main navigation bar is planned, this class can be included to apply some subtle adjustments to the Cornell header.

export type theme = 'cu-default' | 'cu-red' | 'cu-black' | 'cu-gray';
export type logo = 'cu-seal' | 'cu-45';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None, // apply global styles to this component
})
export class HeaderComponent {
  // public svgIconUrl = 'https://rawcdn.githack.com/CU-CommunityApps/cwd_base/734e40e6a6e21bf5cc8afff65096b452d864480e/images/cornell/bold_cornell_logo_simple_b31b1b.svg';
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() theme!: theme;
  @Input() logo!: logo;
  @Input() useGradient!: boolean;
  constructor() {
    this.theme = this.theme || 'cu-default';
    this.logo = this.logo || 'cu-seal';
    this.useGradient = this.useGradient || false;
  }

  getClasses(): string[] {
    const classes: string[] = [];
    if (this.theme) {
      classes.push(this.theme);
    }
    if (this.logo) {
      classes.push(this.logo);
    }
    if (this.useGradient) {
      classes.push('gradient');
    }
    return classes;
  }
}
