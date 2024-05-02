import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../interfaces/Pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService){ }

  listarPokemon(){
    this.pokemonService.listarPokemon().subscribe((item)=>{
      this.pokemons = item;
    })
  }

  ngOnInit(){
    this.listarPokemon();
  }
}
