import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  standalone : true,
})
export class ModalContentComponent{

  activeModal = inject(NgbActiveModal);
	@Input() details: string = '';
}
