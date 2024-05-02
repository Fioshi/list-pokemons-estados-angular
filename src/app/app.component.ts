import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { ListIbgeComponent } from './components/list-ibge/list-ibge.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ListPokemonComponent,
    ListIbgeComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cp-mock-ibge';
}
