import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
const mixitup = require('mixitup');

@Component({
  selector: 'app-home-blank',
  templateUrl: './home-blank.component.html',
  styleUrls: ['./home-blank.component.scss'],
})
export class HomeBlankComponent {
  @ViewChild('vid') videoRef!: ElementRef;

  curentActiveArival: string = 'All';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 0,
    items: 1,
    lazyLoad: true,
    navSpeed: 700,
  };

  customOptionsJust: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: true,
    margin: 15,
    lazyLoad: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  };

  ngOnInit(): void {
    const mixer = mixitup('.slid', {
      animation: {
        duration: 1000,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        applyPerspective: true,
        perspectiveDistance: '1000px',
      },
    });
  }

  // Active Class Change
  setArrivalActive(e: string): void {
    this.curentActiveArival = e;
  }

  // Play Video Or Stop
  playVido(): void {
    if (this.videoRef.nativeElement.paused) {
      this.videoRef.nativeElement.play();
    } else {
      this.videoRef.nativeElement.pause();
    }
  }
}
