import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdvertisementRequest } from './new-advertisement-request';

describe('NewAdvertisementRequest', () => {
  let component: NewAdvertisementRequest;
  let fixture: ComponentFixture<NewAdvertisementRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAdvertisementRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdvertisementRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
