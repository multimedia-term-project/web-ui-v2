import { Component } from '@angular/core';
@Component({
  selector: 'ct-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
  private _opened: boolean = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
