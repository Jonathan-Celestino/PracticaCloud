import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Calculo } from '../models/calculo';
import { Entrada } from '../models/entrada';

@Injectable({
  providedIn: 'root'
})
export class InversionService {
  urlBase = environment.apiUrl;
  constructor(private http: HttpClient) { }

  iniciarCalculo(entrada: Entrada): Observable<Calculo[]> {
    return this.http.post<Calculo[]>(this.urlBase + '/calcular', entrada);
  }    
}
