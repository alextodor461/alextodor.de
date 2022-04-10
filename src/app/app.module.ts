import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { HomeSkillsComponent } from './home/home-skills/home-skills.component';
import { HomeProjectsComponent } from './home/home-projects/home-projects.component';
import { HomeAboutMeComponent } from './home/home-about-me/home-about-me.component';
import { HomeContactComponent } from './home/home-contact/home-contact.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImprintComponent,
    HomeComponent,
    HomeMainComponent,
    HomeSkillsComponent,
    HomeProjectsComponent,
    HomeAboutMeComponent,
    HomeContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
