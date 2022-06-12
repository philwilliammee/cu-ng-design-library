import { Component, Inject, OnInit } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

interface DialogData {
  routes?: Routes;
}

@Component({
  selector: 'lib-mobile-dialog',
  templateUrl: './mobile-dialog.component.html',
  styleUrls: ['./mobile-dialog.component.scss'],
})
export class MobileDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private activeRouter: ActivatedRoute
  ) {}
  public routes?: Routes = this.data.routes;
  ngOnInit(): void {
    this.routes = this.data.routes?.filter(
      (route) => route.data && route.data['menu']
    );
  }

  // @todo do this in a more angular way.
  handleExpandClick(contentClass: string | undefined): void {
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
}
