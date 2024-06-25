import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { NavbarComponent } from 'src/app/core/navbar/navbar.component';
import { CardsComponent } from './pages/blog-home/components/cards/cards.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    BlogComponent,
    NavbarComponent,
    BlogHomeComponent,
    CardsComponent,
    AddPostComponent,
  ]
})
export class BlogModule { }
