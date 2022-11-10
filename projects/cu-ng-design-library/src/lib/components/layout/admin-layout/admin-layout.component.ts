import { Component, Input, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Routes } from '@angular/router';

@Component({
  selector: 'lib-admin-layout',
  template: `
    <lib-side-menu
      [routes]="routes"
      [title]="toolbarTitle"
      [svgIconUrl]="svgIconUrl"
      [imgHeight]="imgHeight"
      [showToggle]="true"
      [mode]="mode"
      [opened]="opened"
      [isMobileLayout]="isMobileLayout"
    >
      <ng-content ngProjectAs="[toolbar]"></ng-content>
      <router-outlet></router-outlet>
    </lib-side-menu>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AdminLayoutComponent implements OnInit {
  @Input() routes!: Routes;
  @Input() toolbarTitle = 'SSIT';
  @Input() svgIconUrl =
    'https://cdn.jsdelivr.net/gh/CU-CommunityApps/cwd_base/images/cornell/bold_cornell_seal_simple_white.svg';
  @Input() imgHeight = '45px';
  @Input() mode: MatDrawerMode = 'side'; // 'over' | 'push' | 'side'
  @Input() opened = true;
  @Input() isMobileLayout = false;

  ngOnInit(): void {
    if (this.isMobileLayout) {
      this.mode = 'over';
      this.opened = false;
    }
  }
}
