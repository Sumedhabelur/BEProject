import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorUpdateComponent } from './professor-update.component';

describe('ProfessorUpdateComponent', () => {
  let component: ProfessorUpdateComponent;
  let fixture: ComponentFixture<ProfessorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
