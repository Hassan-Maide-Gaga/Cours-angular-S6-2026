import { Injectable } from '@angular/core';
import { PatientRequest } from '../models/patient.model';
import { MOCK_PATIENTS } from '@mocks';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }
  createPatient(patientData: PatientRequest):void{
    const newPatient = {
      id: Math.floor(Math.random() * 1000),
      ...patientData
    };
    MOCK_PATIENTS.push(newPatient);
  }
}
