import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../models/User";

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent {

  users: User[] = [];
    constructor(private userService:UserService) { }

  public getInformation() {
    this.userService.getInformation().subscribe((data) => {
      console.log(data);
      this.users = data;
    }, (error) => {
      console.log(error);
    });
  }
}
