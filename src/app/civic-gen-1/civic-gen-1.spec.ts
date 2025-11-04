import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicGen1 } from './civic-gen-1';

describe('CivicGen1', () => {
  let component: CivicGen1;
  let fixture: ComponentFixture<CivicGen1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CivicGen1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicGen1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
