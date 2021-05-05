import { Injectable } from '@angular/core';
import { User } from './interface/user-interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSub = new Subject<User>();
  user: null;

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<User> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map( (response: any) => {
        console.log(response)
          return response
      }))
  }

  getClickedUser(user) {
    return this.userSub.next(user)
  }

}
