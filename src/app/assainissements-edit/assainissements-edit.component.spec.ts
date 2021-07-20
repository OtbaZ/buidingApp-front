import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssainissementsEditComponent } from './assainissements-edit.component';

describe('AssainissementsEditComponent', () => {
  let component: AssainissementsEditComponent;
  let fixture: ComponentFixture<AssainissementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssainissementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssainissementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
