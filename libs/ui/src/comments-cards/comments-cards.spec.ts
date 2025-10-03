import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCards } from './comments-cards';

describe('CommentsCards', () => {
  let component: CommentsCards;
  let fixture: ComponentFixture<CommentsCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
