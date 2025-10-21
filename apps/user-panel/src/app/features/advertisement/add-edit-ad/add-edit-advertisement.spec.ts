import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAdvertisement } from './add-edit-advertisement';

describe('AddEditAdvertisement', () => {
  let component: AddEditAdvertisement;
  let fixture: ComponentFixture<AddEditAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditAdvertisement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
