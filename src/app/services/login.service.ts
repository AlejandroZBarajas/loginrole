import { Injectable } from '@angular/core';
import { User } from '../users/model/user';
import { UsersService } from './users.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInUserSubject = new BehaviorSubject <User | null>(null)
  loggedInUser$ = this.loggedInUserSubject.asObservable()

  constructor(private usersService : UsersService) { }

  login(username:string, password:string):boolean{
    const user = this.usersService.getUsers().find(
      u => u.username === username && u.password === password
    )
    if(user){
      this.loggedInUserSubject.next(user)
      return true
    }
    return false
  }

  getLoggedInUser():User | null{
    return this.loggedInUserSubject.getValue()
  }
}
