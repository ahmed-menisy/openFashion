import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostBlankComponent } from './blog-post-blank/blog-post-blank.component';

const routes: Routes = [{ path: '', component: BlogPostBlankComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPostRoutingModule {}
