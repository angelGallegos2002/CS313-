import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCheckoutComponent } from './online-checkout.component';

describe('OnlineCheckoutComponent', () => {
  let component: OnlineCheckoutComponent;
  let fixture: ComponentFixture<OnlineCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
