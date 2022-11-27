import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryBlankComponent } from './category-blank/category-blank.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [CategoryBlankComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatPaginatorModule,
  ],
})
export class CategoryModule {}
