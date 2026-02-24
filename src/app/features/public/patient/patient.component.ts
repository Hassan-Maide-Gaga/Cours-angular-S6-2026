import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PatientRequest } from '../../../core/models/patient.model';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../../core/services/patient.service';

@Component({
  selector: 'app-patient',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patientForm : FormGroup;
  messageSuccess: string ='';
  constructor(private fb: FormBuilder, private patientSercice: PatientService){
    this.patientForm = this.fb.group({
      numero: new FormControl('', [Validators.required, Validators.minLength(5)]),
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      antecedents: [''],
    });
  }

  get f()
  {
    return this.patientForm.controls;
  }

  onSubmit():void{
    if(this.patientForm.valid)
    {
      const patientData: PatientRequest = this.patientForm.value;
      this.patientSercice.createPatient(patientData);
      this.messageSuccess = 'Patient ajouté avec succès'
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldCtrl = this.f[fieldName];
    return !!(fieldCtrl && fieldCtrl.invalid && (fieldCtrl.dirty || fieldCtrl.touched));
  }

  onReset():void{
    this.patientForm.reset();
    this.messageSuccess = ''
  }
}
