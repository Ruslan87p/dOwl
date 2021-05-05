import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users!: any;
  @ViewChild('user') clickedUser; 
  elementWidth = 50+'%';

  constructor(private userSvc: UserService) {
    this.userSvc.getAllUsers()
    .subscribe( (userData) => {
      this.users = userData
      console.log(userData)
    })
  }


ngOnInit() {

}


getUserProperties(user, index) {
  console.log(this.clickedUser)
  
    this.clickedUser.nativeElement.style.width = this.elementWidth;
  
  this.userSvc.getClickedUser(user);
}

}
