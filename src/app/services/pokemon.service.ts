import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../components/interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private url = "https://demo1290477.mockable.io/pockemon";

  listarPokemon(){
    return this.http.get(this.url) as Observable<Pokemon[]>
  }
}
