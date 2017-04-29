import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'home.html',
  styleUrls: [
    '../assets/css/gallery.css',
    '../assets/css/test.css',
    '../assets/css/nouislider.min.css',
  ],
})
export class homeComponent{
  lat: number = 39.7739;
  lng: number = -86.1763;
  someRange = [ 1, 100 ];
}
