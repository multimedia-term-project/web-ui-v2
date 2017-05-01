import { Component,  TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'ct-navbar',
  template: `
    <ng-sidebar-container>
      <!-- A sidebar -->
      <ng-sidebar [(opened)]="_opened" [showBackdrop]="true" [closeOnClickOutside]="true" [closeOnClickBackdrop]="true">
        <ul class="sidebar-nav nav">
          <li><a href="/login">Sign Out</a></li>
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
              <li><a (click)="askForImage()" class="fa fa-plus"> Add Image</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </ng-sidebar-container>
    <div class="row">
     <div class="col-md-2"></div>
    <div class="col-md-8">
    <ng-template [ngTemplateOutlet]="getTemplate()" ></ng-template>
    <ng-template #default></ng-template>
    <ng-template #upload>
      <br><br><br><br><br><br>
      <uploader></uploader>
      <button (click)="uploadbtn()">Upload</button>
    </ng-template>
    </div>
    <div class="col-md-2"></div>
      </div>
  `,
})
export class NavbarComponent {
  private _opened: boolean = false;
  @ViewChild('default') default : TemplateRef<any>;
  @ViewChild('upload') uploadTemplate: TemplateRef<any>;
  private templateToShow : TemplateRef<any> = this.default;
  _toggleSidebar() {
    this._opened = !this._opened;
  }

  askForImage() {
    console.log("Ask For Image");
    this.templateToShow = this.uploadTemplate
  }
  uploadbtn(){
    console.log("upload")
    this.templateToShow = this.default;
  }
  getTemplate(){
    return this.templateToShow;
  }
}
