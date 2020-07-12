import { Component, OnInit } from "@angular/core";
import { ChatMessage } from "./models/chatMessage";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  constructor() {}
  message: ChatMessage;
  messages: ChatMessage[] = [];

  addMessage(message: ChatMessage) {
    this.messages.push(message);
  }
  ngOnInit(): void {}
}
