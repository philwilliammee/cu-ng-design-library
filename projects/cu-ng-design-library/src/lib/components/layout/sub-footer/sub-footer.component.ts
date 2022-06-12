import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss'],
})
export class SubFooterComponent {
  @Input() isMobileLayout!: boolean;
}
