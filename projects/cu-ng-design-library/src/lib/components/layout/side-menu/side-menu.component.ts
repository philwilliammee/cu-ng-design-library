import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'lib-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Input() routes!: Routes;
  @Input() showToggle = true;

  options = {
    autoCollapseOnClick: false,
    autoCollapseOnHover: false,
    sidenavCollapsed: false,
  };

  constructor() {
    this.showToggle = true;
  }
}
