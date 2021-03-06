import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemonUrl = 'http://localhost:8080/pokemons';

  constructor(private http: HttpClient) { }

  filterList(name: string, page: number, size: number){
    return this.http.get<any>(`${this.pokemonUrl + '?size=' + size + '&page=' + page + '&name=' + name}`);
  }

  list(page: number, size: number){
    return this.http.get<any>(`${this.pokemonUrl + '?size=' + size + '&page=' + page}`);
  }

  getByType(id: number){
    return this.http.get<any>(`${this.pokemonUrl + "/type?id=" + id}`);
  }
}
