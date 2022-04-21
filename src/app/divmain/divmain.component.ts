
import { Component, HostListener, OnInit } from '@angular/core';
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
  erros?:number;
  score?:number;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.tempofinal=Date.now();
    this.tecla=event.keyCode;

    if (this.tecla==this.aux){
      this.acertos=this.acertos!+1;
    }else{
      this.erros=this.erros!+1;
    }
    this.imprimeTempo();
    this.Desenhabola();
  }

  constructor() { }

  ngOnInit(): void {
    this.acertos=0;
    this.tempototal=0;
    this.aux=0;
    this.tecla=0;
    this.tempoinicial=0;
    this.tempofinal=0;
    this.erros=0;
    this.score=0;
  }

  Desenhabola(){
    this.aux= Math.floor(Math.random()*4);
    const x=Math.floor(Math.random()*500);
    const y=Math.floor(Math.random()*400);
    const circulo = document.createElement('div');
    if(this.aux==0){

      circulo.setAttribute("id", "circulo"+this.aux);
      circulo.setAttribute("class","circuloamarelo");
      circulo.style.marginLeft = `${x}px`;
      circulo.style.marginTop = `${y}px`;
      circulo.style.backgroundColor = "yellow";
      circulo.style.width = "60px";
      circulo.style.height= "60px";
      circulo.style.borderRadius= "30px";
      this.aux=37;
    }else if(this.aux==1){

      circulo.setAttribute("id", "circulo"+this.aux);
      circulo.setAttribute("class","circuloazul");
      circulo.style.marginLeft = `${x}px`;
      circulo.style.marginTop = `${y}px`;
      circulo.style.backgroundColor = "blue";
      circulo.style.width = "60px";
      circulo.style.height= "60px";
      circulo.style.borderRadius= "30px";
      this.aux=38;
    }else if(this.aux==2){

      circulo.setAttribute("id", "circulo"+this.aux);
      circulo.setAttribute("class","circuloverde");
      circulo.style.marginLeft = `${x}px`;
      circulo.style.marginTop = `${y}px`;
      circulo.style.backgroundColor = "green";
      circulo.style.width = "60px";
      circulo.style.height= "60px";
      circulo.style.borderRadius= "30px";
      this.aux=39;
    }else if(this.aux==3){

      circulo.setAttribute("id", "circulo"+this.aux);
      circulo.setAttribute("class","circulovermelho");
      circulo.style.marginLeft = `${x}px`;
      circulo.style.marginTop = `${y}px`;
      circulo.style.backgroundColor = "red";
      circulo.style.width = "60px";
      circulo.style.height= "60px";
      circulo.style.borderRadius= "30px";
      this.aux=40;
    }

    const documento = document.getElementById("divjogo");
    if (this.acertos!=0 || this.erros!=0) {
      documento?.replaceChild(circulo, documento.children[0]);
    }else{
      documento?.appendChild(circulo);
    }

    this.tempoinicial=Date.now();

  }

  inicioDeJogo(){
    this.Desenhabola();
  }

  imprimeTempo():void{
    const tempoDeReacao=(this.tempofinal!-this.tempoinicial!)/1000;
    document.getElementById("temporeacao")!.innerHTML="Tempo de Reação: "+tempoDeReacao;
    this.tempototal=this.tempototal!+tempoDeReacao;
    this.acertos!=0 ?
      document.getElementById("tempomedio")!.innerHTML="Tempo médio: "+((this.tempototal!/this.acertos!)as unknown)as string :
      document.getElementById("tempomedio")!.innerHTML="Tempo médio: "+ 0;
    document.getElementById("acertos")!.innerHTML="Acertos: "+(this.acertos! as unknown)as string;
    document.getElementById("erros")!.innerHTML="Erros: "+(this.erros! as unknown)as string;
    document.getElementById("score")!.innerHTML="Score: "+((this.acertos!-this.erros!)as unknown)as string;
  }

  // AtualizaTempo(){

  //   this.imprimeTempo(tempo);
  // }

  // RecarregaBola(){
  //   document.location.reload();
  // }
}
