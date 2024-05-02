import { Component } from '@angular/core';
import { IbgeService } from '../../services/ibge.service';
import { Estado } from '../interfaces/Estado';

@Component({
  selector: 'app-list-ibge',
  standalone: true,
  imports: [],
  templateUrl: './list-ibge.component.html',
  styleUrl: './list-ibge.component.css'
})
export class ListIbgeComponent {

  estados: Estado[] = []

  constructor(private ibgeService: IbgeService){}

  listarIbge(){
    this.ibgeService.listarEstados().subscribe((item) => {
      this.estados = item;
    })
  }

  ngOnInit(){
    this.listarIbge()
  }

}
