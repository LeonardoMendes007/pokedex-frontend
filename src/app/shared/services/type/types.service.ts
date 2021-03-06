import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  typeUrl = 'http://localhost:8080/types';

  constructor(private http: HttpClient) { }

  getAllTypes(){
    return this.http.get<any>(`${this.typeUrl}`);
  }

  getAllPokemonsByType(id:number){
    return this.http.get<any>(`${this.typeUrl + "/" + id}`);
  }

}
