import { Type } from './../../../shared/model/Type';
import { TypesService } from './../../../shared/services/type/types.service';
import { Pokemon } from '../../../shared/model/Pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/shared/services/pokemon/pokemons.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedValueType!: number;

  selectedValueWeaknesses!: number;

  types!: Type[];

  pokemons!: Pokemon[];

  pesquisa = "";

  page = 0;

  size = 18;

  constructor(private pokemonsService: PokemonsService,private typesService: TypesService) {

   }

  ngOnInit(): void {
    this.getAllTypes();
    this.list();
  }

  getAllTypes(){
    this.typesService.getAllTypes().subscribe(dados => this.types = dados);
  }

  selectValueType(value: number){
    if(value != 0){
      this.selectedValueWeaknesses = 0;
      this.typesService.getAllPokemonsByType(value).subscribe(dados => {
        this.pokemons = dados.pokemonsTypes;
      });
    }else{

      this.list();
    }

  }

  selectValueWeaknesses(value: number){
    if(value != 0){
      this.selectedValueType = 0;
      this.typesService.getAllPokemonsByType(value).subscribe(dados => {
        this.pokemons = dados.pokemonsWeaknesses;
      });
    }else{
      this.list();
    }

  }

  onFilterPokemons(name: string){
    this.selectedValueType = 0;
    this.selectedValueWeaknesses = 0;
    this.pokemonsService.filterList(name,this.page,this.size).subscribe(dados => {
      this.pokemons = dados.content
    });
  }

  list(){
    this.pokemonsService.list(this.page,this.size).subscribe(dados => this.pokemons = dados.content);
  }

}
