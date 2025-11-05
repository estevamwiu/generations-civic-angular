import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicGen6 } from './civic-gen-6';

describe('CivicGen6', () => {
  let component: CivicGen6;
  let fixture: ComponentFixture<CivicGen6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CivicGen6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicGen6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
