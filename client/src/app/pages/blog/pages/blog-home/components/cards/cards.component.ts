import { Component, Input } from '@angular/core';
import { IGetPost } from 'src/app/pages/blog/models/get-post.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
    @Input() postData : IGetPost | null = null;

    shortText(text : string) : string
    {
      if(text.length > 30)
        return text.substring(0, 120) + '...';

        return text;
    }
}
