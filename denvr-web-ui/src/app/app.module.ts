import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {registerComponent} from './register.component';
import {loginComponent} from './login.component';
import {homeComponent} from './home.component';
import {Faces} from './face.component'
import {Slider} from './slider.component'
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { NouisliderModule } from 'ng2-nouislider';
import { NavbarComponent } from './navbar.component';

const appRoutes: Routes = [
  { path: 'register', component: registerComponent },
  { path: 'login', component: loginComponent },
  { path: 'home', component: homeComponent },
];



@NgModule({

  declarations: [
    NavbarComponent,
    AppComponent,
    registerComponent,
    loginComponent,
    homeComponent,
    Faces,
    Slider
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOi2bgjXG7ydXj1xNAMpplBf5PB7y7j4Y'
    }),
    NouisliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
