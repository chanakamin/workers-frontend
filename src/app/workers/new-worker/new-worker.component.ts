import { Component, Input } from '@angular/core';
import { Unit } from '../types/Unit';
import { Worker } from '../types/Worker';
import { WorkersService } from '../services/workers.service';
import { UnitsService } from '../services/units.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-new-worker',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-worker.component.html',
  styleUrl: './new-worker.component.scss'
})
export class NewWorkerComponent {
addNewWorker() {
  const worker: Worker = this.newWorkerForm.value;
  this.workersService.createWorker(this.unit?.id as number, worker)
  .subscribe(() => {
    this.router.navigate(['/', this.unit?.id]);
  }, (error) => {
    console.log(error);
    alert('קרתה שגיאה במהלך יצירת העובד. בדוק את תקינות הפרמטרים');
  })
}
cancel() {
  this.router.navigate(['/', this.unit?.id])
}
  unit?: Unit;

  constructor(private workersService: WorkersService, 
    private unitService: UnitsService,
    private router: Router,
    ) {}

  newWorkerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    workerNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    startWorkAt: new FormControl(new Date().toISOString().slice(0, 10), [Validators.required]),
    birthDate: new FormControl(new Date(2000, 0, 1).toISOString().slice(0, 10), [Validators.required]),
  });
  
  @Input() set unitId(unitId: string) { 
    this.unitService.loadUnit(unitId).subscribe(unit => this.unit = unit);
   }
  
}
