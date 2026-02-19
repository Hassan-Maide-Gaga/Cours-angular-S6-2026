import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRdvComponent } from './detail-rdv.component';

describe('DetailRdvComponent', () => {
  let component: DetailRdvComponent;
  let fixture: ComponentFixture<DetailRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
