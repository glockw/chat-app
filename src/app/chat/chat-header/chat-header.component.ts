import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  imageUrl = 'https://avatarfiles.alphacoders.com/103/103989.jpg';
  userName = 'Super Mario Bros.'
  status = true;
  showHeader = false;
  constructor() { }

  ngOnInit(): void {
  }

}
