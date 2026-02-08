import { DemandeListeRDVModel, SpecialiteModel, StatutDemandeModel } from "../features/private/models/demande.model";

export const MOCK_DEMANDES: DemandeListeRDVModel[] = [
    {
        id: 1,
        dateDemande: '2024-07-21',
        statut: 'En attente',
        heure: '1:00 AM',
        specialite: 'Cardiologie'
    },
    {
        id: 2,
        dateDemande: '2024-07-22',
        statut: 'Refusée',
        heure: '10:00 AM',
        specialite: 'Neurologie'
    },
    {
        id: 3,
        dateDemande: '2024-07-23',
        statut: "Acceptée",
        heure: '11:00 AM',
        specialite: 'Pédiatrie'
    },
    {
        id: 4,
        dateDemande: '2024-07-11',
        statut: 'En attente',
        heure: '1:00 AM',
        specialite: 'Neurologie'
    },
    {
        id: 5,
        dateDemande: '2024-07-01',
        statut: 'En attente',
        heure: '1:00 AM',
        specialite: 'Radiologie'
    }
    ,{
        id: 6,
        dateDemande: '2024-07-01',
        statut: 'En attente',
        heure: '1:00 AM',
        specialite: 'Neurologie'
    }
]