import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrassementsEditComponent } from './terrassements-edit.component';

describe('TerrassementsEditComponent', () => {
  let component: TerrassementsEditComponent;
  let fixture: ComponentFixture<TerrassementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrassementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrassementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
