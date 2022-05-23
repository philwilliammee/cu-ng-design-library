import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public svgIconUrl: string = '';
  constructor() { }

  ngOnInit(): void {
    // @todo get this in s3
    this.svgIconUrl = "https://rawcdn.githack.com/CU-CommunityApps/cwd_base/734e40e6a6e21bf5cc8afff65096b452d864480e/images/cornell/bold_cornell_logo_simple_b31b1b.svg";
    //this.svgIconUrl = "https://raw.githubusercontent.com/CU-CommunityApps/cwd_base/main/images/cornell/bold_cornell_logo_simple_b31b1b.svg";
  }

}
