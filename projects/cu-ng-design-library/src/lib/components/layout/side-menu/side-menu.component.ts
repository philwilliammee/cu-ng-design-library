import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'lib-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Input() routes!: Routes;
  @Input() title = 'Admin Toolbar';
  @Input() showToggle = true;

  public svgIconUrl =
    'https://cdn.jsdelivr.net/gh/CU-CommunityApps/cwd_base/images/cornell/bold_cornell_seal_simple_white.svg';

  options = {
    autoCollapseOnClick: false,
    autoCollapseOnHover: false,
    sidenavCollapsed: false,
  };

  constructor() {
    this.showToggle = true;
  }
}
