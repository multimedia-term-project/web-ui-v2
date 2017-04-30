import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {registerComponent} from './register.component';
import { RouterModule, Routes } from '@angular/router';
import {loginComponent} from './login.component';
import {userService} from './user.service';


const appRoutes: Routes = [
  { path: 'register', component: registerComponent },
  { path: 'login', component: loginComponent},
  { path: '',
   redirectTo: '/register',
   pathMatch: 'full'
 }
];



@NgModule({

  declarations: [
    AppComponent,
    registerComponent,
    loginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [userService],
  bootstrap: [AppComponent],
})

export class AppModule {
}
