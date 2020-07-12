import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ChatMessage } from "../models/chatMessage";

@Component({
  selector: "app-chat-footer",
  templateUrl: "./chat-footer.component.html",
  styleUrls: ["./chat-footer.component.css"],
})
export class ChatFooterComponent implements OnInit {
  constructor() {}
  @Output("addMessage") enterClick = new EventEmitter<ChatMessage>();
  ngOnInit(): void {}

  enterSubmmit(event: KeyboardEvent, message: HTMLTextAreaElement) {
    if(event.keyCode == 13){
      this.send(message);
    }
    return;
  }
  send(message: HTMLTextAreaElement) {
    console.log(message.value);
    if (message.value.trim().length == 0) {
      return;
    }
    const today = new Date();
    this.enterClick.emit(<ChatMessage>{
      text: message.value,
      created: today,
    });
    message.value = null;
  }
}
