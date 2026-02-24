import { PatientModel } from "../core/models/patient.model";
import { User } from "../core/models/user.model";

export const MOCK_PATIENTS: PatientModel[] = [
    {
        "id": 1,
        "numero": "P001",
        "nom": "Dupont",
        "prenom": "Jean",
        "telephone": "+221 77 123 45 67",
        "adresse": "123 Rue de la Paix, Dakar",
        "antecedents": "Allergie aux pénicillines, asthme"
    },
    {
        "id": 2,
        "numero": "P002",
        "nom": "Sarr",
        "prenom": "Awa",
        "telephone": "+221 77 987 65 43",
        "adresse": "456 Avenue des Fleurs, Dakar",
        "antecedents": "Diabète de type 2, hypertension"
    },
    {
        "id": 3,
        "numero": "P003",
        "nom": "Diop",
        "prenom": "Mamadou",
        "telephone": "+221 77 555 55 55",
        "adresse": "789 Boulevard de la Liberté, Dakar",
        "antecedents": "Aucun antécédent médical connu"
    }
]