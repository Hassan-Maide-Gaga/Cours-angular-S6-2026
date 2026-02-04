import { Component } from '@angular/core';
import { HeaderPublicComponent } from '../../layouts/public/header-public/header-public.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public',
  imports: [HeaderPublicComponent, RouterOutlet],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {

}
