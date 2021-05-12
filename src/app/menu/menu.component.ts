//Componente para exibir o menu e a lista das pessoas cadastradas

//Pessoas é a interface e Pessoa é o arquivo .ts


import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { Pessoas } from '../Pessoa';
import { WebService } from '../web.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  listadepessoas: Pessoas[]= [];

  //Faço a exportação da variável pessoaSelecionada para ser utilizada em outro componente
  @Output() pessoaSelecionada: Pessoas = {nome: "", idade: 0, imagem: "link"};

  @Input() mostrarCadastro: boolean = false;

  @Output() mostrarLista: boolean = false;

 
  onSelect(pessoa: Pessoas): void{
    this.pessoaSelecionada = pessoa;
    this.mostrarLista = true;
  }

  getPessoas(): void{
    this.listadepessoas = this.database.getPessoas();

  }

  show(){
    this.mostrarCadastro = true;
  }

  constructor(private database: WebService) { }

  ngOnInit(): void {
    this.getPessoas();
    this.mostrarCadastro = false;
    this.mostrarLista = false;
  }

}
