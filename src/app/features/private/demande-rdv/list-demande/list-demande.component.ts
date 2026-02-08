import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemandeListeRDVModel, DemandeListeResponse, DemandeRDVFilterModel, SpecialiteModel, StatutDemandeModel } from '../../models/demande.model';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-demande',
  imports: [RouterModule, FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
  title: string = "Mes Rendez-vous";

  demandesResponse?: DemandeListeResponse;
  filter: DemandeRDVFilterModel = {
    specialite: '',
    statut: 'En attente'
  }

  constructor(private demandeService: DemandeService) {
    //this.demandes = this.demandeService.getDemandesRDV();
  }

  ngOnInit(): void {
    this.loadDemandes();
  }

  private loadDemandes(): void {
    this.demandesResponse = this.demandeService.getDemandesRDV(this.filter);
  }
  onFilterStatusChange(): void {
    this.loadDemandes();
  }

  onFilterSpecialiteChange(): void {
    this.loadDemandes();
  }


}
