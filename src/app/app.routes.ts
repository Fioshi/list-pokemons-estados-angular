import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonService } from './services/pokemon.service';
import { ListIbgeComponent } from './components/list-ibge/list-ibge.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "pokemon", component: ListPokemonComponent},
    {path: "ibge", component: ListIbgeComponent}
];
