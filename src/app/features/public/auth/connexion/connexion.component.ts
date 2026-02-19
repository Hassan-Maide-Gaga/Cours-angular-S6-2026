import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SecurityService } from '../../../../core/services/security.service';
import { FormsModule } from '@angular/forms';
import { UserLoginRequest } from '../../../../core/models/user.model';

@Component({
  selector: 'app-connexion',
  imports: [RouterModule, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  userLogin: UserLoginRequest = {
    email: '',
    password: ''
  }
  constructor(private securityService: SecurityService, private router: Router){

   }

  onLogin(): void
  {
    alert('Login attempted'+JSON.stringify(this.userLogin))
    const loginResult = this.securityService.login(this.userLogin);
    console.log('Login attempted');
    if(loginResult!=null){
      this.router.navigate(['/private/dashboard'])
    }else{
      console.log('Login failed');
    }
  }
}
