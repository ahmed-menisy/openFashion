import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostRoutingModule } from './blog-post-routing.module';
import { BlogPostBlankComponent } from './blog-post-blank/blog-post-blank.component';


@NgModule({
  declarations: [
    BlogPostBlankComponent
  ],
  imports: [
    CommonModule,
    BlogPostRoutingModule
  ]
})
export class BlogPostModule { }
