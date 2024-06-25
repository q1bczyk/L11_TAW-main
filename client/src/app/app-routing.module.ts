import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = 
[
  { 
    path : '', 
    component : HomeComponent
  },
  { 
    path : 'register', 
    component : RegisterComponent,
  },
  { path: 'login',
    component : LoginComponent
  },
  {
    path: 'blog',
    component : BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
