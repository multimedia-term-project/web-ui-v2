import { Component } from '@angular/core';
import {user} from './user';

@Component({
  selector: 'app-root',

  templateUrl: 'register.html',
  styleUrls: ['./app.component.css']
})
export class registerComponent {
  newuser(){
    console.log(user.name, user.password, user.email);
  }
}
