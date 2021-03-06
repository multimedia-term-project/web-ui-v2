import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { user } from './user';
import { Headers, RequestOptions } from '@angular/http';
import {serverResponse} from './serverResponse';
import {picture} from './picture';





@Injectable()
  export class mainService{

     //private userUrl = 'http://52.15.89.214:8002/image/:'+userId;  // URL to web API

     constructor (private http: Http) {}

     getPicture(user): Observable<picture[]> {
       var userUrl = 'http://image-server-api:3000/image/'+user;
       //let headers = new Headers({ 'Content-Type': 'application/json' });
       //let options = new RequestOptions({ headers: headers });
       console.log(userUrl);

       return this.http.get(userUrl)
                    .map(res=>res.json())
                    .catch(this.handleError);
  }

  postPicture(pictureFile): Observable<picture>{
    console.log("hey");
    console.dir(pictureFile);
    var userUrl = 'http://localhost:3000/image/H1KTpBEk-';
    let headers = new Headers({ 'Content-Type': undefined });
    let options = new RequestOptions({ headers: headers });
    console.log(userUrl);
    return this.http.post(userUrl, pictureFile, options)
                 .map(res => res.json())
                 .catch(this.handleError);
}


  private extractData(res: Response) {

  //  console.log(res);
    //let userId = JSON.stringify(res["_body"]);
    //if (userId) {
    //  console.dir(userId);
    //}

  //  return res;
  //console.log(res);
  //  let body = res.json();
  //  console.log(body);
  //  //console.log(body.data);
  //  return body;
    let body = res.json();
    //console.log(body);
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
