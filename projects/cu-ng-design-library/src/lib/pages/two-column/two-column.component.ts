import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-two-column',
  templateUrl: './two-column.component.html',
  styleUrls: ['./two-column.component.scss'],
})
export class TwoColumnComponent {
  @Input() order = '1';
}
