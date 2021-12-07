import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivmainComponent } from './divmain.component';

describe('DivmainComponent', () => {
  let component: DivmainComponent;
  let fixture: ComponentFixture<DivmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
