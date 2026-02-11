import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemandeListeRDVModel, DemandeListeResponse, DemandeRDVFilterModel } from '../../models/demande.model';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-demande',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit, OnDestroy {
  title: string = "Mes Rendez-vous";

  demandesResponse?: DemandeListeResponse;
  filter: DemandeRDVFilterModel = {
    specialite: '',
    statut: 'En attente'
  }

  constructor(private demandeService: DemandeService) {
    //this.demandes = this.demandeService.getDemandesRDV();
  }

  ngOnDestroy() {
    alert('ListDemandeComponent détruit');
  }

  ngOnInit(): void {
    this.loadDemandes();
  }

  private loadDemandes(): void {
    this.demandesResponse = this.demandeService.getDemandesRDV(this.filter);
  }
  onFilterStatusAndSpecialiteChange(): void {
    this.loadDemandes();
  }

  onPageChange(page: number):void{
    this.filter.page = page;
    this.loadDemandes();
  }

  get inactivePrecedent():boolean
  {
    return !(this.demandesResponse != undefined && this.demandesResponse.currentPage > 1);
  }
  
  get inactiveSuivant(): boolean
  {
    return !(this.demandesResponse != undefined && this.demandesResponse.currentPage < this.demandesResponse.totalPages);
  }



}
