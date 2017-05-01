import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { user } from './user';
import { Headers, RequestOptions } from '@angular/http';
import {serverResponse} from './serverResponse';
import {loginService} from './login.service';
import {userService} from './user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <div id="bg"></div>
    <h1>Please log in...</h1>
    <hr>
    <form id="login-form" method="POST" action="/login">
      <label>Denvr</label>
      <br>
      <input [(ngModel)]="name" type="text" name="userName" class="form-control" id="userName" placeholder="Enter username">
      <input [(ngModel)]="password" type="password" name="password" class="form-control" id="password" placeholder="Enter password">
      <button class="login" (click)="signIn(name, password);">Login</button>
      <a routerLink="/register" routerLinkActive="active"> Or Register</a>
    </form>
  </div>
`,
  styleUrls: ['./app.component.css'],
  providers: [loginService],
})
export class loginComponent {
    constructor (private loginService: loginService, private userService:userService, private router:Router) {}
    signIn(userName, password){
      var errorMessage;
      var user = {'email':userName, 'password':password};
      this.loginService.getUser(user)
            .subscribe(
                res => {var data = new serverResponse('',''),
                        data = res;
                        this.loggedIn(data);
                      },
                error =>  errorMessage = <any>error
      );




  }
  loggedIn(data){
    this.userService.setUserId(data.userId);
    //console.log('set');
    var user = this.userService.getUserId();
    //console.log(user);
    this.router.navigate(['/home', user]);
  }
}
