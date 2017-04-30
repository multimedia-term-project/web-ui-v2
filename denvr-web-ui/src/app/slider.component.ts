import {Component} from '@angular/core';


@Component({
  selector: 'slider',
  template: `
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <form action="#">
          <nouislider name="slider" [config]="rangeConfig" [(ngModel)]="someRange" [tooltips]="[ true, true ]"></nouislider>
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


  rangeConfig: any = {
    style: 'margin-top: 4em;',
    connect: true,
    range: {
      min: this.minVal,
      max: this.maxVal
    },
    format: {
      to: function ( value ) {
        let months = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
        let d = new Date(value);
        return (months[d.getMonth()]) + " " + d.getFullYear();
      },
      from: function ( value ) {
        return value.replace(',-', '');
      }
    }
  };

  public someRange : number[] = [ new Date('1995').getTime(), new Date('2000').getTime()];
}
