import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementsEditComponent } from './equipements-edit.component';

describe('EquipementsEditComponent', () => {
  let component: EquipementsEditComponent;
  let fixture: ComponentFixture<EquipementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
