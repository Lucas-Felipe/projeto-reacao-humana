import { createOfflineCompileUrlResolver } from '@angular/compiler';
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
    this.aux=0;
    this.tecla=0;
    this.tempoinicial=0;
    this.tempofinal=0;
  }

  Desenhabola(){
    this.aux= Math.floor(Math.random()*4);

    if(this.aux==0){
      const circulo=document.createElement('div');
      circulo.setAttribute("id", "circulo1");
      circulo.setAttribute("class","circuloamarelo");
      this.aux=37;
    }else if(this.aux==1){
      const circulo=document.createElement('div');
      circulo.setAttribute("id", "circulo1");
      circulo.setAttribute("class","circuloazul");
      this.aux=38;
    }else if(this.aux==2){
      const circulo=document.createElement('div');
      circulo.setAttribute("id", "circulo1");
      circulo.setAttribute("class","circuloverde");
      this.aux=39;
    }else if(this.aux==3){
      const circulo=document.createElement('div');
      circulo.setAttribute("id", "circulo1");
      circulo.setAttribute("class","circulovermelho");
      this.aux=40;
    }

    const x=Math.floor(Math.random()*500);
    const y=Math.floor(Math.random()*400);

    const circulo=document.createElement("div");
    circulo.setAttribute("style",
      "left:"+ x + "px;"+ "top:"+y+"px;"+"margin: 100px"
    );

    document.getElementById("divjogo")!.appendChild(circulo);
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
