import { Component, Input } from '@angular/core';
import { StatutDemandeModel } from '../../../features/private/models/demande.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  template: `
  <ng-container [ngSwitch]="statut">
  <span *ngSwitchCase="'Acceptée'" class="badge bg-success">Acceptée</span>
  <span *ngSwitchCase="'En attente'" class="badge bg-warning">En attente</span>
  <span *ngSwitchCase="'Refusée'" class="badge bg-danger">Refusée</span>
  <span *ngSwitchDefault class="badge bg-secondary">Inconnu</span>
  </ng-container>
                                `
})
export class BadgeComponent {
  @Input() statut: StatutDemandeModel= 'En attente'
}
