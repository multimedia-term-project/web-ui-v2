import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'homeMap.html',
  styleUrls: [
    '../assets/css/gallery.css',
    '../assets/css/test.css'
  ],

})
export class homeMapComponent{
  lat: number = 39.7739;
  lng: number = -86.1763;
  someRange = [ 1, 100 ];

  toggleMap() {

  }
}
