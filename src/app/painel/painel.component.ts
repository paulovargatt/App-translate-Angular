import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

public instrucao: string = "Traduza a frase";
public frases: Frase[] = FRASES
public resposta: string = ''

public rodada: number = 0
public rodadaFrase: Frase

public progresso: number = 0;
public tentativas: number = 3;

  constructor() { 
   this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

  public verificarResposta(): void{

    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++
      //atualiza rodada
      this.atualizaRodada()
      //Progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      
      alert("A Traducao esta correta")


    }else{
      this.tentativas-- 
      if(this.tentativas === -1){
        alert('Acabou as tentativas :(')
      }
    }
  
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
