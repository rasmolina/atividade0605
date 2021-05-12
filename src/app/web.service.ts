import { Injectable } from '@angular/core';
import { Pessoas } from "./Pessoa";

@Injectable({
  providedIn: 'root'
})
export class WebService {

//Defino a lista de pessoas e insiro alguns registros de exemplo
listadepessoas: Pessoas[] = [
  {nome: "Pedro", idade: 25, imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/DpedroI-brasil-full.jpg/250px-DpedroI-brasil-full.jpg"},
  {nome: "Maria", idade: 36, imagem: "http://s2.glbimg.com/sQsiWs4C8lRUJW9phn2QpysfVT8=/290x386/s.glbimg.com/et/nv/f/original/2012/02/23/retorno---neusa-borges.jpg"}

];

  getPessoas(): Pessoas[]{
    return this.listadepessoas;
  }

  cadastrarPessoa(novocadastro: Pessoas){
    this.listadepessoas.push(novocadastro);
    
  }


  constructor() { }
}
