import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core/services';

// TODO: Remove from Module, unused by now
@Component({
  selector:    'app-messages',
  templateUrl: './messages.component.html',
  styleUrls:   ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
  }

}
