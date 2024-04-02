import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ComponenteFilhoComponent } from '../componente-filho/componente-filho.component';

@Component({
  selector: 'app-filho-dois',
  standalone: true,
  imports: [CommonModule, ComponenteFilhoComponent],
  templateUrl: './filho-dois.component.html',
  styleUrl: './filho-dois.component.scss'
})
export class FilhoDoisComponent {

  @Output() mensagemEnviada = new EventEmitter<string>();
  @Input() mensagemDoPai: string = '';
  //@Input() mensagemDeSaida: string = '';

  enviarMensagem() {
    this.mensagemEnviada.emit(
      'Oi componente pai! Esta é uma mensagem do filho para o pai'
    );
  }

  //código ajustado e corrigido
  mensagemRecebidaDoIrmaoUm: string = '';
  receberMensagem(mensagerm: string) {
    this.mensagemRecebidaDoIrmaoUm = mensagerm;
  }
}
