import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBlankComponent } from './home-blank/home-blank.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeBlankComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
