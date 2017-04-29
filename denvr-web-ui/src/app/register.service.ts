import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { user } from './user';
import { Headers, RequestOptions } from '@angular/http';
import {register} from './register'




@Injectable()
  export class registerService{

     private userUrl = 'http://52.15.89.214:8001//user/signup';  // URL to web API

     constructor (private http: Http) {}

     create(user): Observable<register> {
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       console.log(this.userUrl);
    return this.http.post(this.userUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {

  //  console.log(res);
    //let userId = JSON.stringify(res["_body"]);
    //if (userId) {
    //  console.dir(userId);
    //}

  //  return res;
  console.log(res);
   let body = res.json();
   console.log(body.data);
   return body.data || { };
 }
 private handleError (error: Response | any) {
   // In a real world app, you might use a remote logging infrastructure
   let errMsg: string;
   if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
   } else {
     errMsg = error.message ? error.message : error.toString();
   }
   console.error(errMsg);
   return Observable.throw(errMsg);
 }

}
