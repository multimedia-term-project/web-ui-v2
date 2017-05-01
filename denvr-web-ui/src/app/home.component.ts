import { Component } from '@angular/core';
import {userService} from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <html>
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    </html>
    <ct-navbar></ct-navbar>
    <div id="wrapper">
      <!-- Page content -->
      <div id="page-content-wrapper">
        <div class="page-content">
          <main></main>
          <faces></faces>
          <slider></slider>
        </div>
      </div>
    </div>

  `,
  styleUrls: [
    '../assets/css/gallery.css',
    '../assets/css/test.css'
  ],

})
export class homeComponent {
  lat: number = 39.7739;
  lng: number = -86.1763;

  constructor(private userService: userService) {
    var user = this.userService.getUserId();
    console.log(user);
  }

  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
