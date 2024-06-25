import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { IGetPaginationPost } from '../../models/get-pagination-post.interface';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  paginatedPost : IGetPaginationPost | null = null;
  currentPage : number = 1;
  isLoading = false;

  constructor(private blogService : BlogService){ }

  ngOnInit() {
    this.loadPosts();
  }

  incrementPage()
  {
    this.currentPage += 1;
    this.loadPosts();
  }

  private loadPosts()
  {
    this.isLoading = true;
    this.blogService.getPaginatedPosts(this.currentPage)
      .subscribe(res => {
        if (this.paginatedPost) {
          this.paginatedPost.posts = [...this.paginatedPost.posts, ...res.posts];
        } else {
          this.paginatedPost = res;
        }
        this.scrollDown();
      }, err => {
        console.log(err);
      });
    this.isLoading = false;
  }

  scrollToTop() 
  {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollDown()
  {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  
}
