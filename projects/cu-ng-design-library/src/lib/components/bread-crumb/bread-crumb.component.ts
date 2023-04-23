import { Component } from '@angular/core';

@Component({
  selector: 'lib-bread-crumb',
  template: `
		<div class="bread-crumb">
			<ng-content />
		</div>
	`,
  styles: [
    `
      .bread-crumb {
        margin-bottom: 1rem;
        font-size: 0.8rem;
      }
      ::ng-deep .bread-crumb a {
        color: #666;
      }
      ::ng-deep .bread-crumb a:hover {
        color: #333;
        text-decoration: underline;
      }
    `,
  ],
})
export class BreadCrumbComponent {}
