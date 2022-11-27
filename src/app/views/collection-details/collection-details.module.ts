import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionDetailsRoutingModule } from './collection-details-routing.module';
import { CollectionDetailsBlankComponent } from './collection-details-blank/collection-details-blank.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [CollectionDetailsBlankComponent],
  imports: [CommonModule, CollectionDetailsRoutingModule, CarouselModule],
})
export class CollectionDetailsModule {}
