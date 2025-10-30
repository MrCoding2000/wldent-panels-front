import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAdvertisementFinalCheck } from './add-edit-advertisement-final-check';

describe('AddEditAdvertisementFinalCheck', () => {
  let component: AddEditAdvertisementFinalCheck;
  let fixture: ComponentFixture<AddEditAdvertisementFinalCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditAdvertisementFinalCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAdvertisementFinalCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
