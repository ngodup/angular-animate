import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation, } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('displayState', [
      state('inactive', style({
        transform: 'scaleY(0)'
      })),
      state('active', style({
        transform: 'scaleY(1)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('rotateBoxState', [
      state('inactive',
        style({
          height: '200px',
          width: '200px',
          opacity: 0.2,
          backgroundColor: '#ffc107',
          transform: 'rotate(0deg)'
        })),
      state('active', style({
        transform: 'rotate(360deg)',
        width: '100px',
        height: '100px',
        opacity: 1,
        backgroundColor: '#047afc'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ]),
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  hideCard = false;
  rotate = false;
  disabledNext = false;
  disabledPrev = true;

  counter = 0;
  slideItems = [
    { src: '../assets/images/image-1.jpg' },
    { src: '../assets/images/image-2.jpg' },
    { src: '../assets/images/image-3.jpg' }
  ];


  showNextImage() {
    if (this.counter < this.slideItems.length - 1) {
      this.counter += 1;
    }
    this.checkButtonStatus();
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
    this.checkButtonStatus();
  }

  checkButtonStatus() {
    this.disabledNext = (this.counter == this.slideItems.length - 1) ? true : false;
    this.disabledPrev = (this.counter == 0 ) ? true : false
  }
}
