import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaEnviadaComponent } from './alerta-enviada.component';

describe('AlertaEnviadaComponent', () => {
  let component: AlertaEnviadaComponent;
  let fixture: ComponentFixture<AlertaEnviadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaEnviadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaEnviadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
