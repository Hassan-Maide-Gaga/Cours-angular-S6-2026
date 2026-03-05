import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input({ required: true }) message: string = ""
  @Input() type: 'info' | 'success' | 'warning' | 'danger' = 'info'
}
