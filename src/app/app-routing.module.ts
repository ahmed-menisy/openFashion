import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './shared/components/layouts/layout-admin/layout-admin.component';
import { LayoutBlanksComponent } from './shared/components/layouts/layout-blanks/layout-blanks.component';
import { CheckOutComponent } from './views/check-out/check-out.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { OurStoryComponent } from './views/our-story/our-story.component';
import { SearchViewComponent } from './views/search-view/search-view.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBlanksComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule),
        title: 'HOME',
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./views/blog/blog.module').then((m) => m.BlogModule),
        title: 'BLOG',
      },
      {
        path: 'blogpost',
        loadChildren: () =>
          import('./views/blog-post/blog-post.module').then(
            (m) => m.BlogPostModule
          ),
        title: 'BLOGPOST',
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./views/category/category.module').then(
            (m) => m.CategoryModule
          ),
        title: 'CATEGORY',
      },
      {
        path: 'collection',
        loadChildren: () =>
          import('./views/collection/collection.module').then(
            (m) => m.CollectionModule
          ),
        title: 'COLLECTION',
      },
      {
        path: 'collectiondetails',
        loadChildren: () =>
          import('./views/collection-details/collection-details.module').then(
            (m) => m.CollectionDetailsModule
          ),
        title: 'COLLECTIONDETAILS',
      },
      {
        path: 'productdetails',
        loadChildren: () =>
          import('./views/product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
        title: 'PRODUCTDETAILS',
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/admin/admin.module').then((m) => m.AdminModule),
        title: 'ADMIN',
      },
    ],
  },
  { path: 'checkout', component: CheckOutComponent, title: 'CHECKOUT' },
  { path: 'ourstory', component: OurStoryComponent, title: 'OURSTORY' },
  { path: 'searchview', component: SearchViewComponent, title: 'SEARCHVIEW' },
  { path: 'contactus', component: ContactUsComponent, title: 'CONTACTUS' },
  { path: '**', component: NotFoundComponent, title: 'NOTFOUND' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
