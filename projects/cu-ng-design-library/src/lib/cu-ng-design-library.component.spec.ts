import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuNgDesignLibraryComponent } from './cu-ng-design-library.component';

describe('CuNgDesignLibraryComponent', () => {
  let component: CuNgDesignLibraryComponent;
  let fixture: ComponentFixture<CuNgDesignLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuNgDesignLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuNgDesignLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
