import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CabinetService } from './cabinet.service';
import { FooterComponent } from './layout/footer/footer.component';
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
