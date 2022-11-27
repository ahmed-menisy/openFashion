import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionDetailsBlankComponent } from './collection-details-blank/collection-details-blank.component';

const routes: Routes = [
  { path: '', component: CollectionDetailsBlankComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionDetailsRoutingModule {}
