import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Bem Vindo(a) ao Angular';
  stitle = 'Aula parte 2 de Angular';
  image = '../../../assets/angular.png';
  alt = 'Logotipo do novo Angular';
  legend = 'Fonte da imagem: https:// ...';
}
