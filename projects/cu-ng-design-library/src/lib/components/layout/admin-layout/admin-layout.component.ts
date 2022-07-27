import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'lib-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  @Input() routes!: Routes;
  @Input() toolbarTitle = 'SSIT';
}
