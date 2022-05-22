import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss']
})
export class SubFooterComponent implements OnInit {
  @Input() isMobileLayout!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
