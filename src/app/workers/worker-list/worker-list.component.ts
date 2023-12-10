import { Component, Input } from '@angular/core';
import { WorkersService } from '../services/workers.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { Worker } from '../types/Worker';
import { Unit } from '../types/Unit';
import { UnitsService } from '../services/units.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-worker-list',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './worker-list.component.html',
  styleUrl: './worker-list.component.scss'
})
export class WorkerListComponent {

  

deleteWorker(worker: Worker): void{
  this.workersService.deleteWorker(this.unit?.id as number, worker.id as number)
  .pipe(
    switchMap(() => this.workersService.loadWorkers(this.unit?.id as number))
  ).subscribe((workers => this.workers.next(workers)));
}

  workers = new BehaviorSubject<Worker[]>([]);
  unit?: Unit;
  
  @Input() set unitId(unitId: string) { 
    this.unitService.loadUnit(unitId).subscribe(unit => this.unit = unit);
    this.workersService.loadWorkers(unitId).subscribe(workers => this.workers.next(workers))
   }
  constructor(private workersService: WorkersService, private unitService: UnitsService) {}
}
