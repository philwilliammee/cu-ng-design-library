import { Component, Input, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Routes, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() routes!: Routes;
  @Input() title = 'Admin Toolbar';
  @Input() showToggle = true;
  @Input() svgIconUrl =
    'https://cdn.jsdelivr.net/gh/CU-CommunityApps/cwd_base/images/cornell/bold_cornell_seal_simple_white.svg';
  @Input() imgHeight = '45px';
  @Input() mode: MatDrawerMode = 'side'; // 'over' | 'push' | 'side'
  @Input() opened = true;
  @Input() isMobileLayout = false;

  // options = {
  //   autoCollapseOnClick: false,
  //   autoCollapseOnHover: false,
  //   sidenavCollapsed: false,
  // };

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private activeRouter: ActivatedRoute
  ) {
    this.showToggle = true;
  }

  ngOnInit(): void {
    // this.options.autoCollapseOnClick = this.isMobileLayout;
    if (this.isMobileLayout) {
      this.mode = 'over';
      this.opened = false;
    }
  }

  // @todo do this in a more angular way.
  handleExpandClick(contentClass: string | undefined): void {
    console.log('handleExpandClick', contentClass);
    // slide opn and close
    const content = document.querySelector(
      '.content.' + contentClass
    ) as HTMLElement;

    if (content) {
      if (content?.style.maxHeight) {
        content.style.maxHeight = '';
      } else {
        content.style.maxHeight = content?.scrollHeight + 'px';
      }
    }
    // toggle aria attributes
    const collapsible = document.querySelector('.collapsible.' + contentClass);
    if (collapsible) {
      // toggle aria expanded attribute
      if (collapsible.getAttribute('aria-expanded') === 'true') {
        collapsible.setAttribute('aria-expanded', 'false');
      } else {
        collapsible.setAttribute('aria-expanded', 'true');
      }
    }
  }

  handleFocus(contentClass: string | undefined): void {
    console.log('handleFocus', contentClass);
    const content = document.querySelector(
      '.content.' + contentClass
    ) as HTMLElement;
    if (content) {
      content.style.maxHeight = content?.scrollHeight + 'px';
    }

    const collapsible = document.querySelector('.collapsible.' + contentClass);
    if (collapsible) {
      collapsible.setAttribute('aria-expanded', 'true');
    }
  }

  routeHasActiveChild(route: Route): string {
    const _activeChild = this.activeRouter.children.length;
    if (_activeChild != 0) {
      for (let i = 0; i < _activeChild; i++) {
        if (this.activeRouter.children[i].outlet === 'primary') {
          if (
            this.activeRouter.children[i].snapshot.url[0].path === route.path
          ) {
            return 'active-parent';
          }
        }
      }
    }
    return '';
  }

  handleLinkClick() {
    if (this.isMobileLayout) {
      this.handleToggleClick();
    }
  }

  handleToggleClick() {
    this.opened = !this.opened;
  }
}
