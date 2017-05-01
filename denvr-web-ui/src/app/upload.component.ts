import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {Observable} from "rxjs/Observable";
import {RequestOptions, Http, Response} from "@angular/http";

// const URL = '/api/';
const URL = 'http://localhost:3000/image/test';

@Component({
  selector: 'uploader',
  template: `<input type="file" (change)="fileChange($event)" placeholder="Upload file" accept="*">`
})
export class Uploader {
  constructor (private http: Http) {}
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let options = new RequestOptions();
        this.http.post(URL, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}
}
