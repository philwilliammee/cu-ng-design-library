import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

// This component implements the main menu.
// As outlined in https://www.w3.org/WAI/ARIA/apg/example-index/menubar/menubar-navigation.html
@Component({
  selector: 'lib-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  @Input() routes!: Routes;

  constructor() {}

  ngOnInit(): void {}
}
