import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityNavComponent } from './utility-nav.component';

describe('UtilityNavComponent', () => {
  let component: UtilityNavComponent;
  let fixture: ComponentFixture<UtilityNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
