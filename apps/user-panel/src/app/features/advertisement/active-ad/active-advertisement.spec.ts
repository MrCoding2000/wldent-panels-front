import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAdvertisement } from './active-advertisement';

describe('ActiveAdvertisement', () => {
  let component: ActiveAdvertisement;
  let fixture: ComponentFixture<ActiveAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveAdvertisement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
