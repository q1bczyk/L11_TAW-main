import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/ui/modal/modal.component';
import { IAddPost } from '../../models/add-post.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{
  addPostForm : FormGroup = new FormGroup({});
  loading : boolean = false;
  modal : ModalComponent = new ModalComponent();
  
  constructor(private blogService : BlogService){}

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      title : new FormControl('', Validators.required),
      text : new FormControl('', [Validators.required, Validators.minLength(8)]),
      image : new FormControl('', [Validators.required])
    })
  }

  get controls() : string[]
  {
    return Object.keys(this.addPostForm.controls);
  }


  onSubmit()
  {
    if(this.addPostForm.invalid)
    return

    const data : IAddPost = {
      title : this.addPostForm.get('title')?.value,
      text : this.addPostForm.get('text')?.value,
      image : this.addPostForm.get('image')?.value,
    }

    this.loading = true;

    this.blogService.addPost(data)
      .subscribe(res => {
        this.loading = false;
        this.modal.open('Pomyslnie opublikowano post', "Sukces");
      }, err => {
        this.loading = false;
        this.modal.open(err.error, 'Błąd ' + err.status);
        console.log(err);
      })
  }
}
