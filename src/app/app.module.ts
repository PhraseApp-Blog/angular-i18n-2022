import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CabinetService } from './cabinet.service';
import { FooterComponent } from './footer/footer.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    LocaleSwitcherComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CabinetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
