import { Injectable } from '@angular/core';
import { User } from '../users/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    new User ('admin1', 'admin123','admin'),
    new User ('admin2', 'admin123','admin'),
    new User ('user1', 'user123', 'user'),
    new User ('user2', 'user123', 'user')
  ]



  constructor() { }

  getUsers():User[]{
    return this.users
  }
}
