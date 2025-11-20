import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementDetails } from './advertisement-details';

describe('EditAdvertisement', () => {
  let component: AdvertisementDetails;
  let fixture: ComponentFixture<AdvertisementDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisementDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
