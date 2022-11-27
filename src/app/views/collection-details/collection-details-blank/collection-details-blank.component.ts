import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-collection-details-blank',
  templateUrl: './collection-details-blank.component.html',
  styleUrls: ['./collection-details-blank.component.scss'],
})
export class CollectionDetailsBlankComponent {
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
}
