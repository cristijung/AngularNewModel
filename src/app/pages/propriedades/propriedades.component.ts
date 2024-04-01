import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponenteFilhoComponent } from '../../components/components-conteudo/componente-filho/componente-filho.component';
import { FilhoDoisComponent } from '../../components/components-conteudo/filho-dois/filho-dois.component';

@Component({
  selector: 'app-propriedades',
  standalone: true,
  imports: [CommonModule, ComponenteFilhoComponent, FilhoDoisComponent],
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.scss'
})
export class PropriedadesComponent {
  title = 'Eu sou um Componente Pai'; //property binding

  mensagemParaFilho = ''; //variável com inferância de tipo com string vazia
  mensagemParFilhoDois = '';

    //hook que controla o cliclo de vida da mensagem
  ngOnInit() {
    this.mensagemParaFilho = 'Esta mensagem está sendo passada de pai para filho - de um componente para outro';
    this.mensagemParFilhoDois = 'Estou enviando para o componente Filho 02';
  }

  //para receber a mensagem do filho 2
  mensagemRecebidaDoFilho: string = '';

  receberMensagem(mensagem: string) {
    this.mensagemRecebidaDoFilho = mensagem;
  }

}
