import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBlanksComponent } from './layout-blanks/layout-blanks.component';
import { RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { NavBarComponent } from 'src/app/views/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/views/footer/footer.component';
import { ContactUsComponent } from 'src/app/views/contact-us/contact-us.component';
import { CheckOutComponent } from 'src/app/views/check-out/check-out.component';
import { OurStoryComponent } from 'src/app/views/our-story/our-story.component';
import { NotFoundComponent } from 'src/app/views/not-found/not-found.component';
import { SearchViewComponent } from 'src/app/views/search-view/search-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    LayoutBlanksComponent,
    LayoutAdminComponent,
    NavBarComponent,
    FooterComponent,
    ContactUsComponent,
    CheckOutComponent,
    OurStoryComponent,
    SearchViewComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTabsModule,
  ],
})
export class LayoutsModule {}
