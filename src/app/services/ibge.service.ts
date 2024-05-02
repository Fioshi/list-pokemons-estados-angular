import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../components/interfaces/Estado';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(private http: HttpClient) { }

  private url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

  listarEstados(){
    return this.http.get(this.url) as Observable<Estado[]>
  }

}
