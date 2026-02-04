// class DemandeRDV {
//     constructor(
//         public id: number,
//         public dateDemande: Date,
//         public statut: string,
//         public heure: string,

//     ) { }
// }

// class DemandeRDV2 {
//     id: number;
//     dateDemande: Date;
//     statut: string;
//     heure: string;

//     constructor(
//         id: number,
//         dateDemande: Date,
//         statut: string,
//         heure: string,

//     ) {
//         this.id = id;
//         this.dateDemande = dateDemande;
//         this.statut = statut;
//         this.heure = heure;
//     }
// }

export enum StatutDemandeModel {
    EN_ATTENTE = 'En attente',
    ACCEPTEE = 'Acceptée',
    REFUSEE = 'Refusée',
}

export enum SpecialiteModel {
    CARDIOLOGIE = 'Cardiologie',
    DERMATOLOGIE = 'Dermatologie',
    NEUROLOGIE = 'Neurologie',
    PEDIATRIE = 'Pédiatrie',
    RADIOLOGIE = 'Radiologie',
}

export interface DemandeListeRDVModel {
    id: number;
    dateDemande: string;
    statut: StatutDemandeModel;
    heure: string;
    specialite: SpecialiteModel;
}

const demande3: DemandeListeRDVModel = {
    id: 3,
    dateDemande: '2024-07-23',
    statut: StatutDemandeModel.ACCEPTEE,
    heure: '11:00 AM',
    specialite: SpecialiteModel.CARDIOLOGIE
}