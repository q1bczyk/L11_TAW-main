import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './ui/loader/loader.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations : [
    LoaderComponent
  ],
  exports : [
    LoaderComponent
  ]
})
export class SharedModule { }
