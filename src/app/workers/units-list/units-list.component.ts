import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Unit } from '../types/Unit';
import { UnitsService } from '../services/units.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-units-list',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, HttpClientModule],
  templateUrl: './units-list.component.html',
  styleUrl: './units-list.component.scss'
})
export class UnitsListComponent {
  units: Unit[] = [];
  constructor(private unitsService: UnitsService) {
    this.unitsService.loadUnits().subscribe(units => this.units = units)
  }
}
