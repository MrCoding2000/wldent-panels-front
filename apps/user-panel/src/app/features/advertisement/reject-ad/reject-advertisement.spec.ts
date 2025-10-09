import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectAdvertisement } from './reject-advertisement';

describe('Advertisement', () => {
  let component: RejectAdvertisement;
  let fixture: ComponentFixture<RejectAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectAdvertisement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
