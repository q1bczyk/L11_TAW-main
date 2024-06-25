import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { BlogHomeComponent } from "./pages/blog-home/blog-home.component";
import { YourPostsComponent } from "./pages/your-posts/your-posts.component";
import { AddPostComponent } from "./pages/add-post/add-post.component";

const routes: Routes = 
[
  { 
    path : '', 
    component : BlogComponent,
    children : 
    [
      {
        path : '',
        component : BlogHomeComponent,
      },
      {
        path : 'posts',
        component : YourPostsComponent
      },
      {
        path : 'add',
        component : AddPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
