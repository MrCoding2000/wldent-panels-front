import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalCard } from './optional-card';

describe('OptionalCard', () => {
  let component: OptionalCard;
  let fixture: ComponentFixture<OptionalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
