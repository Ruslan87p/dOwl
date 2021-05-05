import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user!: any;
  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.userSub.subscribe( (user) => {
      this.user = user;
      console.log(user, 'UserComponent')
    } )
  }

}
