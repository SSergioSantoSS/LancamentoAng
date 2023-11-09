import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroLancamentosComponent } from './cadastro-lancamentos/cadastro-lancamentos.component';
import { ConsultaLancamentosComponent } from './consulta-lancamentos/consulta-lancamentos.component';

import{ Routes, RouterModule} from '@angular/router';

const routes : Routes = [
  {path:'cadastro-lancamentos', component : CadastroLancamentosComponent},
  {path:'consulta-lancamentos', component : ConsultaLancamentosComponent},

]


@NgModule({
declarations: [
 AppComponent,
 CadastroLancamentosComponent,
 ConsultaLancamentosComponent
],

imports: [ 
  BrowserModule,
  HttpClientModule, 
  FormsModule, 
  ReactiveFormsModule, 
  RouterModule.forRoot(routes)

],

providers: [],
bootstrap: [AppComponent]

})
export class AppModule { }