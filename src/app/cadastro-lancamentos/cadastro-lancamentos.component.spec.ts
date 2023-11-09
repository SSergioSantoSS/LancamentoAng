import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLancamentosComponent } from './cadastro-lancamentos.component';

describe('CadastroLancamentosComponent', () => {
  let component: CadastroLancamentosComponent;
  let fixture: ComponentFixture<CadastroLancamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroLancamentosComponent]
    });
    fixture = TestBed.createComponent(CadastroLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
