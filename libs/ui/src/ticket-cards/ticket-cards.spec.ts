import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCards } from './ticket-cards';

describe('TicketCards', () => {
  let component: TicketCards;
  let fixture: ComponentFixture<TicketCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
