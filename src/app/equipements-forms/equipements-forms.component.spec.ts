import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementsFormsComponent } from './equipements-forms.component';

describe('EquipementsFormsComponent', () => {
  let component: EquipementsFormsComponent;
  let fixture: ComponentFixture<EquipementsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementsFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
