import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  username: string =''
  password: string = ''
  error: string =''

  constructor(private loginService : LoginService){}

  Login(){
    if(!this.loginService.login(this.username, this.password)){
      this.error='Credenciales incorrectas'
    }else{
      this.error=''
    }
  }

}
