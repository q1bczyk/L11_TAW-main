import { Component, inject } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent{

  private modalService = inject(NgbModal);

	open(details : string) : void{
		const modalRef = this.modalService.open(ModalContentComponent);
		modalRef.componentInstance.details = details;
	}

}
