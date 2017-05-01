import { Component } from '@angular/core';
import {user} from './user';
import {serverResponse} from './serverResponse'
import {registerService} from './register.service';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {register} from './register';
import {userService} from './user.service';
import {AppModule} from './app.module';
import { Router, ActivatedRoute, Params } from '@angular/router';







@Component({
  selector: 'register',
  template: `
  <div>
    <div id="bg"></div>
    <h1>Enter information below!</h1>
    <hr>
    <form id="register-form" method="POST" action="/register">
      <label>Denvr</label>
      <br>
      <input [(ngModel)]="name" type="text" name="userName" class="form-control" id="userName" placeholder="Enter username">
      <input [(ngModel)]="password" type="password" name="password" class="form-control" id="password" placeholder="Enter password">
      <input [(ngModel)]="email" type="email" name="email" class="form-control" id="email" placeholder="Enter email">
      <input [(ngModel)]="confirmEmail" type="email" name="confirmEmail" class="form-control" id="confirmEmail" placeholder="Confirm email">
      <button class="login" (click)="newUser(name, password, email);">Register</button>
      <a routerLink="/login" routerLinkActive="active">login</a>
    </form>
  </div>
`,
  styleUrls: ['./app.component.css'],
  providers: [registerService],
})
export class registerComponent {


 constructor (private registerService: registerService, private userService: userService, private router:Router) {}
// constructor(private userservice:userService){}

//constructor (private userService: userService)

  newUser(userName, password, email):Observable<serverResponse>{
     var errorMessage: string;
     var response;
     //userService.setUserId();
     var data = new serverResponse('','');
     var success: string;
     var user = {'name': userName, 'password': password, 'email':email};
    if (!user) { return; }
      this.registerService.create(user)
                       .subscribe(
                                res => {
                                //import userService
                                var data = new serverResponse('',''),
                                data = res;
                                //console.log(data.userId);
                                //userService.setUserId(data.userId)
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
