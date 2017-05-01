import { Component, TemplateRef, ViewChild} from '@angular/core'

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

              <div class="gallery">
                <a target="_blank" href="img_lights.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Northern Lights" width="600" height="400">
                </a>
              </div>

              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Mountains" width="600" height="400">
                </a>
              </div>

              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Mountains" width="600" height="400">
                </a>
              </div>

              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Mountains" width="600" height="400">
                </a>
              </div>

              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Mountains" width="600" height="400">
                </a>
              </div>

              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Mountains" width="600" height="400">
                </a>
              </div>

              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Mountains" width="600" height="400">
                </a>
              </div>

              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Mountains" width="600" height="400">
                </a>
              </div>

              <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                  <img src="http://kingofwallpapers.com/face/face-051.jpg" alt="Mountains" width="600" height="400">
                </a>
              </div>
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
  ]
})

export class Main{
  @ViewChild('images') images : TemplateRef<any>;
  @ViewChild('map') map: TemplateRef<any>;
  private templateToShow : string = "images"

  public lat: number = 39.7739;
  public lng: number = -86.1763;

  changeTemplate() {
    this.templateToShow = (this.templateToShow == "images"? "map":"images");
  }

  getTemplate() {
    return {
      "images": this.images,
      "map": this.map
    }[this.templateToShow];
  }
}
