import { Component, Input } from '@angular/core';
import { IGetPost } from 'src/app/pages/blog/models/get-post.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
    @Input() postData : IGetPost | null = null;
}
