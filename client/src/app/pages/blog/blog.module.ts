import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { NavbarComponent } from 'src/app/core/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
  ],
  declarations: [
    BlogComponent,
    NavbarComponent,
  ]
})
export class BlogModule { }
