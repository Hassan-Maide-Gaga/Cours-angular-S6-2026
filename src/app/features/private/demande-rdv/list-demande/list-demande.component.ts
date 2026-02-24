import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemandeListeRDVModel, DemandeListeResponse, DemandeRDVFilterModel } from '../../models/demande.model';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemandeMockService } from '../services/demande.mock.service';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemandeComponent implements OnInit, OnDestroy {
  title: string = "Mes Rendez-vous";

  demandesResponse?: DemandeListeResponse;
  private subscription?: Subscription;
  filter: DemandeRDVFilterModel = {
    specialite: '',
    statut: 'En attente'
  }

  constructor(private demandeService: DemandeMockService) {
    //this.demandes = this.demandeService.getDemandesRDV();
  }

  ngOnDestroy():void {
    alert('ListDemandeComponent détruit');
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadDemandes();
  }

  private loadDemandes(): void {
    this.subscription = this.demandeService.getDemandesRDV(this.filter).subscribe({
      next: (response: DemandeListeResponse) => {
        this.demandesResponse = response
      },
      error: (error) => {
        console.error('Erreur:', error)
      },
      complete: () => {
        console.log('Complete')
      }
    });
  }
  onFilterStatusAndSpecialiteChange(): void {
    this.loadDemandes();
  }

  onPageChange(page: number): void {
    this.filter.page = page;
    this.loadDemandes();
  }

  get inactivePrecedent(): boolean {
    return !(this.demandesResponse != undefined && this.demandesResponse.currentPage > 1);
  }

  get inactiveSuivant(): boolean {
    return !(this.demandesResponse != undefined && this.demandesResponse.currentPage < this.demandesResponse.totalPages);
  }



}
