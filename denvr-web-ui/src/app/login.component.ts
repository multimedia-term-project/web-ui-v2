import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { user } from './user';
import { Headers, RequestOptions } from '@angular/http';
import {serverResponse} from './serverResponse';
import {loginService} from './login.service'


@Component({
  selector: 'app-root',
  templateUrl: 'login.html',
  styleUrls: ['./app.component.css'],
  providers: [loginService],
})
export class loginComponent {
    constructor (private loginService: loginService) {}
    signIn(userName, password){
      var errorMessage;
      var user = {userName, password};
      this.loginService.getUser(user)
            .subscribe(
                res => {var data = new serverResponse('',''),
                        data = res;
                        console.log(data)},
                error =>  errorMessage = <any>error
      );




  }
}
