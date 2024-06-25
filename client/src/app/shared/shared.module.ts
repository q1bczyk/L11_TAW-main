import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './ui/loader/loader.component';
import { ModalComponent } from './ui/modal/modal.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations : [
    LoaderComponent,
    ModalComponent,
  ],
  exports : [
    LoaderComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
