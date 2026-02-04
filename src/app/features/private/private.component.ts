import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/private/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {

}
