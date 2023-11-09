import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cadastro-lancamentos',
  templateUrl: './cadastro-lancamentos.component.html',
  styleUrls: ['./cadastro-lancamentos.component.css']
})
export class CadastroLancamentosComponent {

  mensagem = "";

  validacoes = {
    Descricao : [], Status : [], Data : [], Valor : [] 
  }

  ngOnInit(): void{

  }

  constructor(private httpClient:HttpClient) {
    
  }

  cadastrarLancamento(formCadastro:any) : void {
this.mensagem = "";
this. validacoes = {
  Descricao : [], Status : [], Data : [], Valor : [] 
}

  this.httpClient.post("https://localhost:7223/api/Lancamentos", formCadastro.form.value,
  { responseType: 'text'})
  .subscribe(
    (data) => {
      this.mensagem = data;

      formCadastro.form.reset();
    },
    (e) => {
      switch (e.status) {
        case 400: 
        this.validacoes = JSON.parse(e.error).errors;
        break;
        case 422:
        this.mensagem = e.error;
        break;
        default:
        console.log(e);
      }
   }
        
  )
  }
}
