import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnExampleComponent } from './one-column-example.component';

describe('OneColumnExampleComponent', () => {
  let component: OneColumnExampleComponent;
  let fixture: ComponentFixture<OneColumnExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneColumnExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneColumnExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
