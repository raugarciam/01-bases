import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];

  heroeBorrado: string = '';

  borrarHeroe(): void{
   this.heroeBorrado = this.heroes.shift() || '';
  }

}
