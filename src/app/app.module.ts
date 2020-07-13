import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { HeaderDetailComponent } from './chat/chat-header/header-detail/header-detail.component';
import { ChatFooterComponent } from './chat/chat-footer/chat-footer.component';
import { RowLengthDirective } from './shared/row-length.directive';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { ChatContainerComponent } from './chat/chat-container/chat-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatComponent,
    ChatHeaderComponent,
    HeaderDetailComponent,
    ChatFooterComponent,
    RowLengthDirective,
    ChatMessageComponent,
    ChatContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
