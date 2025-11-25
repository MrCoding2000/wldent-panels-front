import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedAdvertisement } from './reported-advertisement';

describe('ReportedAdvertisement', () => {
  let component: ReportedAdvertisement;
  let fixture: ComponentFixture<ReportedAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportedAdvertisement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
