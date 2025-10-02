import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveHeader } from './responsive-header';

describe('ResponsiveHeader', () => {
  let component: ResponsiveHeader;
  let fixture: ComponentFixture<ResponsiveHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
