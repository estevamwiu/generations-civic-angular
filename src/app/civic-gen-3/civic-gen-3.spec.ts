import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicGen3 } from './civic-gen-3';

describe('CivicGen3', () => {
  let component: CivicGen3;
  let fixture: ComponentFixture<CivicGen3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CivicGen3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicGen3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
