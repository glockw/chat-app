import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { HeaderDetailComponent } from './chat/chat-header/header-detail/header-detail.component';
import { ChatFooterComponent } from './chat/chat-footer/chat-footer.component';
import { RowLengthDirective } from './shared/row-length.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatComponent,
    ChatHeaderComponent,
    HeaderDetailComponent,
    ChatFooterComponent,
    RowLengthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
