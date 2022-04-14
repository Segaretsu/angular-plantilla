import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomePublicoComponent } from './menu-home-publico.component';

describe('MenuHomePublicoComponent', () => {
  let component: MenuHomePublicoComponent;
  let fixture: ComponentFixture<MenuHomePublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHomePublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomePublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
