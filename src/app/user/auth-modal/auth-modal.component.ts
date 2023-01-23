import { ModalService } from './../../services/modal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.modal.register('auth')
  }

  ngOnDestroy(){
    this.modal.unregister('auth')
  }
}
