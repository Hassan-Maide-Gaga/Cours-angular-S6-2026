import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConsultationComponent } from './detail-consultation.component';

describe('DetailConsultationComponent', () => {
  let component: DetailConsultationComponent;
  let fixture: ComponentFixture<DetailConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
