import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

export interface items {
  title: string;
  body: string;
  icon: string;
}

SwiperCore.use([FreeMode, Navigation, Thumbs]);
@Component({
  selector: 'app-product-details-blank',
  templateUrl: './product-details-blank.component.html',
  styleUrls: ['./product-details-blank.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailsBlankComponent {
  thumbsSwiper: any;
  items: items[] = [
    {
      title: 'Free Flat Rate Shipping',
      body: `Estimated to be delivered on 09/11/2021 - 12/11/2021.`,
      icon: `<span
    class="bg-icons shrink-0 block w-[22px] h-[18px] bg-[-196px_-98px]"
  ></span>`,
    },
    {
      title: 'COD Policy',
      body: `Estimated to be delivered on 09/11/2021 - 12/11/2021.`,
      icon: `
      <span  class="bg-icons shrink-0 block w-[25px] h-[25px] bg-[-410px_-41px]"></span>
  `,
    },
    {
      title: 'Return Policy',
      body: `Estimated to be delivered on 09/11/2021 - 12/11/2021.`,
      icon: `
   <span class="bg-icons shrink-0 block w-[22px] h-[20px] bg-[-454px_-43px]"></span>
  `,
    },
  ];
}
