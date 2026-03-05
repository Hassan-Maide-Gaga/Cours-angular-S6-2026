import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserLoginRequest } from '../../../core/models/user.model';
import { SecurityService } from '../../../core/services/security.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ISecurityService, SECURITY_SERVICE_TOKEN } from '../../../core/services/interfaces/security.interface.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: UserLoginRequest = {
    email: '',
    password: ''
  }
  errorMessage: string = '';
  constructor(@Inject(SECURITY_SERVICE_TOKEN) private securityService: ISecurityService, private router: Router) {

  }

  onLogin(formCtrl: NgForm): void {
    if (formCtrl.invalid) {
      this.errorMessage = 'Veuillez remplir correctement le form.';
      return;
    }
    const loginResult = this.securityService.login(this.userLogin);
    console.log('Login attempted');
    if (loginResult != null) {
      this.router.navigate(['/private/dashboard'])
    }
  }

  isFieldInvalid(fieldName: string, formCtrl: NgForm): boolean {
    const fieldCtrl = formCtrl?.controls[fieldName];
    return !!(fieldCtrl && fieldCtrl.invalid && (fieldCtrl.dirty || fieldCtrl.touched));
  }
}
