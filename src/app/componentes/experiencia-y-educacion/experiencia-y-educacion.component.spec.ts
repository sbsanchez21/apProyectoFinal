import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaYEducacionComponent } from './experiencia-y-educacion.component';

describe('ExperienciaYEducacionComponent', () => {
  let component: ExperienciaYEducacionComponent;
  let fixture: ComponentFixture<ExperienciaYEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaYEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaYEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
