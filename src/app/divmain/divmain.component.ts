import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divmain',
  templateUrl: './divmain.component.html',
  styleUrls: ['./divmain.component.scss']
})
export class DivmainComponent implements OnInit {
  aux?:number;
  tecla?:number;
  tempoinicial?:number;
  tempofinal?:number;
  acertos?:number;
  tempototal?:number;

  constructor() { }

  ngOnInit(): void {
    this.acertos=0;
    this.tempototal=0;
  }

  Desenhabola(){
    //this.aux= random;

    // if(){

    // }else if(){

    // }else if(){

    // }else if(){

    // }

    // const x=;
    // const y=;

    // Boolean.setattribute();

    // document.body.appendChild();
    this.tempoinicial=Date.now();
  }

  inicioDeJogo(){
    this.Desenhabola();
  }

  // eventoDeTecla(event){

  // }

  imprimeTempo(){

  }

  AtualizaTempo(){

  }

  RecarregaBola(){

  }
}
