export interface PatientModel{
    id: number;
    numero: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse: string;
    antecedents: string;
}

export type PatientRequest = Omit<PatientModel, 'id'>;