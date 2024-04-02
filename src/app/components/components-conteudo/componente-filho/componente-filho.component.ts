import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.scss'
})
export class ComponenteFilhoComponent {

  @Input() mensagemDoPai: string = ''; //este decorator é para receber dados de outro componente
  @Input() mensagemEnviada: string = '';
  @Output() mensagemParaEnviarParaDois = new EventEmitter<string>(); //este decorator é para enviar dados de outro componente
  //como ele está associado a um evento de emissão, será preciso colocar um elemento de interação no DOM através do user- o que pode ser:
  // - um botão
  // - um textfield
  // - uma área editável

  //código ajustado e corrigido
  enviarMensagem() {
    this.mensagemParaEnviarParaDois.emit(
      'Boa tarde querido componente! Estou enviando uma mensagem do Componente Filho 01 para o Componente Filho 02'
    );
  }


}
