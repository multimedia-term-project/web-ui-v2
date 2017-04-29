import { Component } from '@angular/core';
import {user} from './user';
import {registerService} from './register.service';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {register} from './register'
//import { Component, OnInit, ViewEncapsulation } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: 'register.html',
  styleUrls: ['./app.component.css'],
  providers: [registerService],
})
export class registerComponent {

 constructor (private registerService: registerService) {}


  newUser(userName, password, email):Observable<register>{
     var errorMessage: string;
     var response;
     var success: string;
     var user = {userName, password, email};
    if (!user) { return; }
      this.registerService.create(user)
                       .subscribe(
                         response => register,
                         error =>  errorMessage = <any>error
                       );
      console.dir(response);
    }
}
