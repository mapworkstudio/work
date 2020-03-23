import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ClientComponent implements OnInit {

  clientInfo = [
    {clientimg: 'client'},
    {clientimg: 'client'},
    {clientimg: 'client'},
    {clientimg: 'client'},
    {clientimg: 'client'},
    {clientimg: 'client'}
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}
