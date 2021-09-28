import { Injectable } from '@angular/core';
import { TravelApp } from './travel-app';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelAppService {
  getData(tableName: string): Observable<any[]> {
    // replace with HttpClient.get(ENDPOINT_URL);
    return of(TravelApp[tableName]);
  }
}
