import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLancamentosComponent } from './consulta-lancamentos.component';

describe('ConsultaLancamentosComponent', () => {
  let component: ConsultaLancamentosComponent;
  let fixture: ComponentFixture<ConsultaLancamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaLancamentosComponent]
    });
    fixture = TestBed.createComponent(ConsultaLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
