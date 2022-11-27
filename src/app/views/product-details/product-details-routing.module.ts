import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsBlankComponent } from './product-details-blank/product-details-blank.component';

const routes: Routes = [{ path: '', component: ProductDetailsBlankComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailsRoutingModule {}
