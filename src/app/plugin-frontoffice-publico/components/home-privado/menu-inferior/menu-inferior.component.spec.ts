import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInferiorComponent } from './menu-inferior.component';

describe('MenuInferiorComponent', () => {
  let component: MenuInferiorComponent;
  let fixture: ComponentFixture<MenuInferiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInferiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
