import {Component} from '@angular/core';


@Component({
  selector: 'slider',
  template: `
        <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <form action="#">
            <nouislider name = "silder" [connect]="true" [min]="0" [max]="10" [(ngModel)]="someRange" [tooltips]="[ true, true ]" style="margin-top: 4em;"></nouislider>
          </form>
        </div>
        <div class="col-md-1"></div>
      </div>
  `,
  styleUrls: [
    '../assets/css/gallery.css',
    '../assets/css/test.css'
  ],
})
export class Slider{
  public someRange : number[] = [ 1, 75 ];
}
