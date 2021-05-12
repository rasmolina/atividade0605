//Componente para cadastrar uma pessoa
import { Component, Input, OnInit, Output } from '@angular/core';
import { Pessoas } from '../Pessoa';
import { WebService } from '../web.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @Input() novocadastro: Pessoas = {nome: "", idade: 0, imagem:""};

  cadastrados: Pessoas[] = [];

  @Output() mostrarCadastro: boolean;

  constructor(private database: WebService) { }
 
  ngOnInit(): void {
    this.cadastrados = this.database.getPessoas();
    
  }

  //Função para cadastrar uma nova pessoa, e aqui já faço a validação (nome em branco ou já cadastrado)
  cadastrar(): void{
    if (!this.novocadastro.nome){
      return alert('Nome em branco!')
    } else if (this.cadastrados.filter(novocadastro => novocadastro.nome === this.novocadastro.nome).length > 0) {
      return alert('Pessoa já cadastrada!')
    }
    this.database.cadastrarPessoa(this.novocadastro);
    alert('Pessoa cadastrada com sucesso!');
    this.novocadastro = {nome: "", idade: 0, imagem:""};
    this.mostrarCadastro = false;
    
  }
  

  reset(): void{
    this.novocadastro = {nome: "", idade: 0, imagem:""};
  }


}

