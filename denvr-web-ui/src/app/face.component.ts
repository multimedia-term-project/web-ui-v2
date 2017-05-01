import { Component } from '@angular/core';
import {faceService} from './face.service';
import {userService} from './user.service';
import {picture} from './picture';

@Component({
  selector: 'faces',
  template: `
          <div class="col-md-2">
          <div class="panel panel-default">
            <div class="panel-body" style="overflow:scroll; height:600px;">
              Faces<br>
              <!-- <img src="http://kingofwallpapers.com/face/face-051.jpg"><br><br>
                 <img src="http://kingofwallpapers.com/face/face-051.jpg"><br><br>
                 <img src="http://kingofwallpapers.com/face/face-051.jpg"><br><br>
                 <img src="http://kingofwallpapers.com/face/face-051.jpg"><br><br>
                 <img src="http://kingofwallpapers.com/face/face-051.jpg"><br><br>
                 <img src="http://kingofwallpapers.com/face/face-051.jpg"><br><br>
                 <img src="http://kingofwallpapers.com/face/face-051.jpg"><br><br>
                 <img src="http://kingofwallpapers.com/face/face-051.jpg"><br> -->


                 <div *ngFor="let picture of pictures">
                  <img src =   {{picture.url}}><br>
                  </div>

          </div>
        </div>
  `,
  styleUrls: [
    '../assets/css/gallery.css',
    '../assets/css/test.css'
  ],
  providers: [faceService]
})
export class Faces{
  pictures: picture[];
  errorMessage: string;
  mode = 'observable';


    constructor(private faceService: faceService, private userService: userService){

    }
    ngOnInit() { this.getPictures(); }
    //this.pictures[1].imageUrl = "alksdjf";
    getPictures(){
            //this.pictures[1].imageUrl = "alksdjf";
           var userId = this.userService.getUserId();
           //console.log(userId);
           this.faceService.getPicture(userId)
                 .subscribe(
                     pictures => {this.pictures = pictures;
                                  //console.log(this.pictures[1].url);
                              },
                     error =>  this.errorMessage = <any>error
          );




          //console.log(this.pictures);


    }

}
