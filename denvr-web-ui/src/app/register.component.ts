import { Component } from '@angular/core';
import {user} from './user';

@Component({
  selector: 'app-root',
  templateUrl: 'register.html',
  styleUrls: ['./app.component.css']
})
export class registerComponent {
  user = new user('','','');

  newUser(userName, password, email){
    console.log(userName, password, email);
  }
}
