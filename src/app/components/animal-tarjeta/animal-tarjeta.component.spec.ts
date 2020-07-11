import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTarjetaComponent } from './animal-tarjeta.component';

describe('AnimalTarjetaComponent', () => {
  let component: AnimalTarjetaComponent;
  let fixture: ComponentFixture<AnimalTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
