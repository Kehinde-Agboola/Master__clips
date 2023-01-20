;
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {ModalService} from "../services/modal.service"

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ],
  // providers: [
  //   ModalService
  // ]
})
export class SharedModule { }
