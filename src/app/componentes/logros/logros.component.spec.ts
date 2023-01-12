import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogrosComponent } from './logros.component';

describe('LogrosComponent', () => {
  let component: LogrosComponent;
  let fixture: ComponentFixture<LogrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
