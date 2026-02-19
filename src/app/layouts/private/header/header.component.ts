import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SecurityService } from '../../../core/services/security.service';

@Component({
  selector: 'app-header-private',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private securityService: SecurityService, private router: Router) { }
  logout(): void {
    this.securityService.logout()
    this.router.navigate(['/public/login'])
  }
}