import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogBlankComponent } from './blog-blank/blog-blank.component';

const routes: Routes = [{ path: '', component: BlogBlankComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
