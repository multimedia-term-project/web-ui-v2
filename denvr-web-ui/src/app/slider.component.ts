import {Component} from '@angular/core';


@Component({
  selector: 'slider',
  template: `
        <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <form action="#">
            <nouislider [connect]="true" [min]="minVal" [max]="maxVal" [(ngModel)]="someRange" [tooltips]="[ true, true ]" style="margin-top: 4em;"></nouislider>
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
  minDate = new Date(1994, 12, 10);
  public minVal: number = this.minDate.getTime();
  maxDate = new Date(2017, 12, 10);
  public maxVal: number = this.maxDate.getTime();


  public someRange : number[] = [ new Date('1990').getTime(), new Date('2018').getTime()];
}
