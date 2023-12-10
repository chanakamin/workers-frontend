import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Worker } from '../types/Worker';



@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private httpClient: HttpClient) { }

  public loadWorkers(unitId: number|string): Observable<Worker[]> {
    return this.httpClient.get<Worker[]>(`${environment.apiUrl}/unit/${unitId}/worker`)
  }

  public createWorker(unitId: number, worker: Worker): Observable<Worker> {
    return this.httpClient.post<Worker>(`${environment.apiUrl}/unit/${unitId}/worker`, worker)
  }

  public deleteWorker(unitId: number, workerId: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/unit/${unitId}/worker/${workerId}`)
  }
}
