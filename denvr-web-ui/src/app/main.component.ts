import { Component, TemplateRef, ViewChild} from '@angular/core'
import {userService} from './user.service';
import {mainService} from './main.service';
import {picture} from './picture';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'main',
  template: `
    <div class="col-md-2" style="height:600px;">
        <div class="panel panel-map" style="height:100%;">
          <div id="mapPanel" class="panel-default" style="height:100%;">
            <button (click)="changeTemplate()">Map</button>
          </div>
        </div>
    </div>
    <ng-template [ngTemplateOutlet]="getTemplate()"></ng-template>
    <ng-template #images>
      <div class="col-md-8">
          <div class="panel panel-default">
            <div class="panel-body" style="overflow:scroll; height:75%;">
            <!--
            <div *ngFor="let picture of pictures">
                <div class ="gallery">
                <a target = {{picture.url}} href = {{picture.url}}>
                  <img src = {{picture.url}} width = "10%">
                </a>
                </div>
            </div>

            -->
            <!--<form id="login-form" method="POST" action="/login">-->
              <!--<label>Denvr</label>-->
              <!--<br>-->
              <!--Send File:<br>-->
              <!--<input type="file" ng2FileSelect [uploader]="uploader" />-->
              <!--<button class="login" (click)="sendPicture(uploader);">send</button>-->

            <!--</form>-->
              <uploader></uploader>


            <!--
              <div class="gallery">
                <a target="_blank" href="img_fjords.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Trolltunga Norway" width="10%">
                </a>
              </div>
              <div class="gallery">
                <a target="_blank" href="img_forest.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Forest" width="600" height="400">
                </a>
              </div>

                -->

            </div>
          </div>
      </div>
    </ng-template>

    <ng-template #map>
      <div class="col-md-8">
          <div class="panel panel-default">
            <div class="panel-body" style="overflow:scroll; height:75%;">
              <sebm-google-map [latitude]="lat" [longitude]="lng">
                <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
              </sebm-google-map>
            </div>
          </div>
        </div>
    </ng-template>
  `,
  styleUrls: [
    '../assets/css/gallery.css',
    '../assets/css/test.css'
  ],
  providers: [mainService]
})

export class Main{
  //URL: "http://localhost:4200/home/";
  //public uploader:FileUploader = new FileUploader({url: "http://localhost:4200/home/"});
  //public uploader:FileUploader = new FileUploader({url: URL});
  pictures: picture[];
  errorMessage: string;
  counter:number;
  @ViewChild('images') images : TemplateRef<any>;
  @ViewChild('map') map: TemplateRef<any>;
  private templateToShow : string = "images"

  public lat: number = 39.7739;
  public lng: number = -86.1763;
  public uploader:FileUploader = new FileUploader({url: "http://localhost:4200/home/"})


  constructor(private userService: userService, private mainService:mainService){
    this.counter = -1;

  }

  ngOnInit() { this.getPictures();
   //public uploader:FileUploader = new FileUploader({url: "http://localhost:4200/home/"})
 }
  getPictures(){
          //this.pictures[1].imageUrl = "alksdjf";
         var userId = this.userService.getUserId();
         //console.log(userId);
         this.mainService.getPicture(userId)
               .subscribe(
                   pictures => {this.pictures = pictures;
                                console.log(this.pictures[1].url);
                            },
                   error =>  this.errorMessage = <any>error
        );
    }




  changeTemplate() {
    this.templateToShow = (this.templateToShow == "images"? "map":"images");
  }

  getTemplate() {
    return {
      "images": this.images,
      "map": this.map
    }[this.templateToShow];
  }

  sendPicture(image){
    this.counter++;
    //var image = image;
    var userId = this.userService.getUserId();
    //console.log(userId);
    console.log(this.uploader.queue[this.counter].file);
    this.mainService.postPicture(this.uploader.queue[0].file)
      .subscribe(
        pictures => {console.log('hey');
                 },
        error =>  this.errorMessage = <any>error
      )
  }



}
