import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {registerComponent} from './register.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'register', component: registerComponent },
];



@NgModule({

  declarations: [
    AppComponent,
    registerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
