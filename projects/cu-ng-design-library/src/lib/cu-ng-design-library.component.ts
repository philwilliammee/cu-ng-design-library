import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { CWD_BREAKPOINTS_SIZES } from './cu-ng-design-library.breakpoints';
import { theme, logo } from './components/layout/header/header.component';

@Component({
  selector: 'lib-cu-ng-design-library',
  template: `
    <lib-skip-link></lib-skip-link>
    <lib-header
      [title]="title"
      [subtitle]="subtitle"
      [logo]="logo"
      [theme]="theme"
      [useGradient]="useGradient"
    >
      <lib-header-buttons>
        <lib-utility-nav></lib-utility-nav>
        <lib-mobile-menu
          [routes]="routes"
          *ngIf="isMobileLayout"
        ></lib-mobile-menu>
      </lib-header-buttons>
    </lib-header>

    <lib-main-menu [routes]="routes" *ngIf="!isMobileLayout"></lib-main-menu>

    <router-outlet></router-outlet>

    <lib-footer>
      <lib-main-footer></lib-main-footer>
      <lib-sub-footer [isMobileLayout]="isMobileLayout"></lib-sub-footer>
    </lib-footer>
  `,
})
export class CuNgDesignLibraryComponent implements OnInit {
  @Input() routes!: Routes;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() theme: theme = 'cu-default';
  @Input() logo: logo = 'cu-seal';
  @Input() useGradient: boolean = false;
  @HostListener('window:resize', ['$event'])
  public isMobileLayout: boolean = false;

  constructor() {}

  onResize(event: any) {
    // this.isMobileLayout =
    //   event.target.innerWidth <= CWD_BREAKPOINTS_SIZES.md.max;
  }

  ngOnInit(): void {
    // window.onresize = () => this.isMobileLayout = window.innerWidth <= 768;
    this.isMobileLayout = window.innerWidth <= CWD_BREAKPOINTS_SIZES.md.max;
  }
}
