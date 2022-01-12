import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { HomeSkillsComponent } from './home/home-skills/home-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImprintComponent,
    HomeComponent,
    AboutComponent,
    HomeMainComponent,
    HomeSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
