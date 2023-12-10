import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unit } from '../types/Unit';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private httpClient: HttpClient) { }

  public loadUnits(): Observable<Unit[]> {
    return this.httpClient.get<Unit[]>(`${environment.apiUrl}/unit`)
  }

  public loadUnit(unitId: string): Observable<Unit> {
    return this.httpClient.get<Unit>(`${environment.apiUrl}/unit/${unitId}`)
  }
}
