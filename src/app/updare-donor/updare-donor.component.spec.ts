import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdareDonorComponent } from './updare-donor.component';

describe('UpdareDonorComponent', () => {
  let component: UpdareDonorComponent;
  let fixture: ComponentFixture<UpdareDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdareDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdareDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
