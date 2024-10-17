import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { LoginService } from '../../../services/login.service';
import { User } from '../../model/user';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent implements OnInit{
  users: User[] = []
  loggedInUser : User | null = null

  constructor(private usersService: UsersService, private loginService: LoginService){}

  ngOnInit(): void {
      this.users = this.usersService.getUsers()
      this.loginService.loggedInUser$.subscribe(user => {
        this.loggedInUser=user
      })
  }

  showButton():boolean{
    if(this.loggedInUser?.role==='admin'){
      return true
    }else{
      return false
    }
  }
}
