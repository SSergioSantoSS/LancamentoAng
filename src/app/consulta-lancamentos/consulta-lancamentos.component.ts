import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-lancamentos',
  templateUrl: './consulta-lancamentos.component.html',
  styleUrls: ['./consulta-lancamentos.component.css']
})
export class ConsultaLancamentosComponent implements OnInit {

  mensagem = "";

  lancamentos = [{
    idLancamento : '', descricao : '', data : '', valor : '', avulso : '', status : '',
  }];

  constructor(private httpClient: HttpClient){

  }


  ngOnInit(): void {

    this.httpClient.get('https://localhost:7223/api/Lancamentos')
      .subscribe(
        data => {
          this.lancamentos = data as any[];
        },
        e => { 
          console.log(e);
        }
      )
  }

  cancelarLancamento(idLancamento: any): void {
    
    if (confirm('Deseja realmente cancelar esse lançamento?')) {
      
      this.httpClient.delete('https://localhost:7223/api/Lancamentos/' + idLancamento,
      {responseType: 'text'})
        .subscribe(
          data => {            
            this.mensagem = data;
            this.ngOnInit();
          },
          e => {
            console.log(e);
          }
        );
    }
  }

}
