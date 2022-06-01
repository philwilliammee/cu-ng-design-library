import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnExampleComponent } from './two-column-example.component';

describe('TwoColumnExampleComponent', () => {
  let component: TwoColumnExampleComponent;
  let fixture: ComponentFixture<TwoColumnExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
