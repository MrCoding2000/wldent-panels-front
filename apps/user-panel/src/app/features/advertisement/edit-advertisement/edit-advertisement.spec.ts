import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdvertisement } from './edit-advertisement';

describe('EditAdvertisement', () => {
  let component: EditAdvertisement;
  let fixture: ComponentFixture<EditAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAdvertisement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
