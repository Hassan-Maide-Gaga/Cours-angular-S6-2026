import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserLoginRequest } from '../../../core/models/user.model';
import { SecurityService } from '../../../core/services/security.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: UserLoginRequest = {
    email: '',
    password: ''
  }
  constructor(private securityService: SecurityService, private router: Router) {

  }

  onLogin(): void {
    const loginResult = this.securityService.login(this.userLogin);
    console.log('Login attempted');
    if (loginResult != null) {
      this.router.navigate(['/private/dashboard'])
    } else {
      console.log('Login failed');
    }
  }
}
