import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DemandeListeRDVModel, DemandeListeResponse, DemandeRDVFilterModel } from '@private/models';
import { DemandeService, DemandeMockService } from '@private/demande/services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent, BadgeComponent, PaginationComponent } from '@shared/components';
import { DEMANDE_SERVICE_TOKEN } from '@private/demande/services/interfaces';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AlertComponent, BadgeComponent, PaginationComponent],
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

  constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    alert('ListDemandeComponent détruit');
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadDemandes();
  }

  private loadDemandes(): void {
    //this.demandesResponse = this.route.snapshot.data['demandes'];
    this.subscription = this.route.data.subscribe({
      next: (data) => {
        this.demandesResponse = data['demandes'] as DemandeListeResponse;
        console.log("Data from resolver:", this.demandesResponse);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log("Error fething data from resolver:", error)
      }
    })
  }
  // private loadDemandes(): void {
  //   this.subscription = this.demandeService.getDemandesRDV(this.filter).subscribe({
  //     next: (response: DemandeListeResponse) => {
  //       this.demandesResponse = response
  //     },
  //     error: (error) => {
  //       console.error('Erreur:', error)
  //     },
  //     complete: () => {
  //       console.log('Complete')
  //     }
  //   });
  // }
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
