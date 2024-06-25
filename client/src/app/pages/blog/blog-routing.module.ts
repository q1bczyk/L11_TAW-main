import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { BlogHomeComponent } from "./pages/blog-home/blog-home.component";
import { YourPostsComponent } from "./pages/your-posts/your-posts.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
