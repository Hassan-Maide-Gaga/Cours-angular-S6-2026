import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SecurityService } from '../../../core/services/security.service';
import { ISecurityService, SECURITY_SERVICE_TOKEN } from '../../../core/services/interfaces/security.interface.service';
import { UserLoginResponse } from '../../../core/models/user.model';

@Component({
  selector: 'app-header-private',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentUser!: UserLoginResponse
  constructor(@Inject(SECURITY_SERVICE_TOKEN) private securityService: ISecurityService, private router: Router) { }
  logout(): void {
    this.securityService.logout()
    this.router.navigate(['/public/login'])
  }

  ngOnInit(): void {
    this.currentUser = this.securityService.getCurrentUser()!;
  }
}