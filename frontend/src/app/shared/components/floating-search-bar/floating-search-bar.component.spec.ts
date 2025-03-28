import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSearchBarComponent } from './floating-search-bar.component';

describe('FloatingSearchBarComponent', () => {
  let component: FloatingSearchBarComponent;
  let fixture: ComponentFixture<FloatingSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
