import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIndividualsCardComponent } from './service-individuals-card.component';

describe('ServiceIndividualsCardComponent', () => {
  let component: ServiceIndividualsCardComponent;
  let fixture: ComponentFixture<ServiceIndividualsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceIndividualsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceIndividualsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
