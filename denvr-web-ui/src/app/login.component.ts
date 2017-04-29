import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'login.html',
  styleUrls: ['./app.component.css']
})
export class loginComponent {
  signIn(userName, password){
    console.log(userName, password);
  }
}
