import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public svgIconUrl: string =
    'https://rawcdn.githack.com/CU-CommunityApps/cwd_base/734e40e6a6e21bf5cc8afff65096b452d864480e/images/cornell/bold_cornell_logo_simple_b31b1b.svg';
  @Input() title!: string;
  @Input() subtitle!: string;
  constructor() {
    this.title = this.title || 'CU-NG-Design-Library';
    this.subtitle =
      this.subtitle ||
      'A library of reusable components for the CU-Community-Apps';
  }

  ngOnInit(): void {}
}
