import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicGen7 } from './civic-gen-7';

describe('CivicGen7', () => {
  let component: CivicGen7;
  let fixture: ComponentFixture<CivicGen7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CivicGen7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicGen7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
