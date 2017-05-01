import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { user } from './user';
import { Headers, RequestOptions } from '@angular/http';

import {serverResponse} from './serverResponse';





@Injectable()
  export class userService{
    userName: string;
    id: string;
    private _range: number[];

     constructor () {
       this.userName = '';
       this.id = '';
       this._range = [0, 100];
     }

     setUserName(userName){
       this.userName = userName;
     }

     getUserName(){
       return this.userName;
     }

     setUserId(userId){
       this.id = userId;
       console.log(this.id);
     }

     getUserId(){
       console.log(this.id);
       return this.id;
     }


    getRange(): number[] {
      return this._range;
    }

    setRange(value: number[]) {
      this._range = value;
    }
}
