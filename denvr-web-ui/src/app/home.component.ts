import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'home.html',
  styleUrls: [
    '../assets/css/gallery.css',
    '../assets/css/test.css'
  ],

})
export class homeComponent{
  lat: number = 39.7739;
  lng: number = -86.1763;

  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
