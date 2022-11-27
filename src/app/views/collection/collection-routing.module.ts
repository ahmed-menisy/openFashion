import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionBlankComponent } from './collection-blank/collection-blank.component';

const routes: Routes = [{ path: '', component: CollectionBlankComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionRoutingModule {}
