import { Component } from '@angular/core';
@Component({
  selector: 'ct-navbar',
  template: `
    <ng-sidebar-container>
      <!-- A sidebar -->
      <ng-sidebar [(opened)]="_opened" [showBackdrop]="true" [closeOnClickOutside]="true" [closeOnClickBackdrop]="true">
        <ul class="sidebar-nav nav">
          <li><a href="/login">Sign Out</a></li>
          <li><a href="#">Update Info</a></li>
          <li><a href="#">Delete Photo</a></li>
        </ul>
      </ng-sidebar>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand">
            <!-- Page content -->
            <i (click)="_toggleSidebar()"  class="fa fa-bars"></i>
            <a href="/home">Denvr</a>
          </a>
  
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#" class="fa fa-plus"> Add Image</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </ng-sidebar-container>
  `,
})
export class NavbarComponent {
  private _opened: boolean = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
