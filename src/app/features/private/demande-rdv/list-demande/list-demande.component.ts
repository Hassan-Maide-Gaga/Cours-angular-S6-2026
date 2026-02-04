import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemandeListeRDVModel, SpecialiteModel, StatutDemandeModel } from '../../models/demande.model';

@Component({
  selector: 'app-list-demande',
  imports: [RouterModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
  title: string = "Mes Rendez-vous";

  demandes: DemandeListeRDVModel[] = [
    {
      id: 1,
      dateDemande: '2024-07-21',
      statut: StatutDemandeModel.EN_ATTENTE,
      heure: '1:00 AM',
      specialite: SpecialiteModel.CARDIOLOGIE
    },
    {
      id: 2,
      dateDemande: '2024-07-22',
      statut: StatutDemandeModel.REFUSEE,
      heure: '10:00 AM',
      specialite: SpecialiteModel.NEUROLOGIE
    },
    {
      id: 3,
      dateDemande: '2024-07-23',
      statut: StatutDemandeModel.ACCEPTEE,
      heure: '11:00 AM',
      specialite: SpecialiteModel.PEDIATRIE
    }
  ]
  // onTitleClick(arg: string): void{
  //   alert("Vous avez cliqué sur le titre: " + arg);
  // }
}
