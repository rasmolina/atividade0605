//Componente para exibir as informações cadastradas de uma pessoa
import { Component, OnInit, Input } from '@angular/core';
import { $ } from 'protractor';
import { Pessoas } from '../Pessoa';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  //Crio a variável nomepessoa que vai receber os dados de outro componente
  @Input() nomepessoa: Pessoas = {nome: "", idade: 0, imagem: ""};

  
  constructor() { }

  ngOnInit(): void {
       
   
  }

}
