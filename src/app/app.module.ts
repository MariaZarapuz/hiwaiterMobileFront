import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './home/index/index.component';
import { MenuComponent } from './home/menu/menu.component';
import { NavigationComponent } from './home/index/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalLoginComponent } from './modal/modal-login/modal-login.component';
import { ModalTicketsComponent } from './modal/modal-tickets/modal-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    MenuComponent,
    NavigationComponent,
    ModalLoginComponent,
    ModalTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,

    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
