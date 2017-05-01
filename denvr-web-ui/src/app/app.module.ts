import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {registerComponent} from './register.component';
import {loginComponent} from './login.component';
import {homeComponent} from './home.component';
import {Main} from './main.component'
import {Faces} from './face.component'
import {Slider} from './slider.component'
import { RouterModule, Routes } from '@angular/router';
import {userService} from './user.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NouisliderModule } from 'ng2-nouislider';
import { NavbarComponent } from './navbar.component';
import { SidebarModule } from 'ng-sidebar';

const appRoutes: Routes = [
  { path: 'register', component: registerComponent },

  { path: 'home', component: homeComponent },

  { path: 'login', component: loginComponent},
  { path: '',
   redirectTo: '/login',
   pathMatch: 'full'
 }

];



@NgModule({

  declarations: [
    NavbarComponent,
    AppComponent,
    registerComponent,
    loginComponent,
    homeComponent,
    Faces,
    Slider,
    Main


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOi2bgjXG7ydXj1xNAMpplBf5PB7y7j4Y'
    }),
    NouisliderModule,
    SidebarModule.forRoot()
  ],
  providers: [userService],
  bootstrap: [AppComponent],
})

export class AppModule {
}
