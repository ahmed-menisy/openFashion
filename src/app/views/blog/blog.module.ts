import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogBlankComponent } from './blog-blank/blog-blank.component';

@NgModule({
  declarations: [BlogBlankComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
