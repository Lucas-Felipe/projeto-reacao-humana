import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
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
    this.aux=0;
    this.tecla=0;
    this.tempoinicial=0;
    this.tempofinal=0;
  }

  Desenhabola(){
    this.aux= Math.floor(Math.random()*4);
    const x=Math.floor(Math.random()*500);
    const y=Math.floor(Math.random()*400);
    const circulo = document.createElement('div');
    if(this.aux==0){

      circulo.setAttribute("id", "circulo"+this.aux);
      circulo.setAttribute("class","circuloamarelo");
      circulo.style.left = `${x}px`;
      circulo.style.top = `${y}px`;
      circulo.style.margin = "100px";
      circulo.style.backgroundColor = "yellow";
      circulo.style.width = "60px";
      circulo.style.height= "60px";
      circulo.style.borderRadius= "30px";
      this.aux=37;
    }else if(this.aux==1){

      circulo.setAttribute("id", "circulo"+this.aux);
      circulo.setAttribute("class","circulolaranja");
      circulo.style.left = `${x}px`;
      circulo.style.top = `${y}px`;
      circulo.style.margin = "100px";
      circulo.style.backgroundColor = "orange";
      circulo.style.width = "60px";
      circulo.style.height= "60px";
      circulo.style.borderRadius= "30px";
      this.aux=38;
    }else if(this.aux==2){

      circulo.setAttribute("id", "circulo"+this.aux);
      circulo.setAttribute("class","circuloverde");
      circulo.style.left = `${x}px`;
      circulo.style.top = `${y}px`;
      circulo.style.margin = "100px";
      circulo.style.backgroundColor = "green";
      circulo.style.width = "60px";
      circulo.style.height= "60px";
      circulo.style.borderRadius= "30px";
      this.aux=39;
    }else if(this.aux==3){

      circulo.setAttribute("id", "circulo"+this.aux);
      circulo.setAttribute("class","circulovermelho");
      circulo.style.left = `${x}px`;
      circulo.style.top = `${y}px`;
      circulo.style.margin = "100px";
      circulo.style.backgroundColor = "red";
      circulo.style.width = "60px";
      circulo.style.height= "60px";
      circulo.style.borderRadius= "30px";
      this.aux=40;
    }

    const documento = document.getElementById("divjogo");
    documento?.appendChild(circulo);
    document.getElementById("divjogo")?.appendChild(circulo);

    this.tempoinicial=Date.now();

  }

  inicioDeJogo(){

    this.Desenhabola();
  }

  eventoDeTecla(event:any){
    this.tecla=event.keyCode;
    if (this.tecla==this.aux) {
      this.acertos=this.acertos!+1;
      this.tempofinal=Date.now();
      this.AtualizaTempo();
    }else
      this.RecarregaBola();
  }

  imprimeTempo(tempo:any){
    this.tempototal=this.tempototal+tempo;
    document.getElementById("temporeacao")!.innerHTML=tempo;
    document.getElementById("tempomedio")!.innerHTML=((this.tempototal!/this.acertos!)as unknown)as string;
  }

  AtualizaTempo(){
    var tempo=(this.tempofinal!-this.tempoinicial!)/1000;
    document.getElementById("acertos")!.innerHTML=(this.acertos! as unknown)as string;
    this.imprimeTempo(tempo);
  }

  RecarregaBola(){
    document.location.reload();
  }
}
