import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
  encapsulation: ViewEncapsulation.None, // apply global styles to this component
})
export class MainFooterComponent {}
