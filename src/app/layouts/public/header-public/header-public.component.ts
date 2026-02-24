import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-public',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-public.component.html',
  styleUrl: './header-public.component.css'
})
export class HeaderPublicComponent {

}
