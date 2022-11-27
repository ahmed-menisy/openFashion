import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsBlankComponent } from './product-details-blank/product-details-blank.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ProductDetailsBlankComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    SwiperModule,
    CdkAccordionModule,
  ],
})
export class ProductDetailsModule {}
