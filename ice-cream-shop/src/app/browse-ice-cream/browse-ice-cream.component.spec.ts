import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseIceCreamComponent } from './browse-ice-cream.component';

describe('BrowseIceCreamComponent', () => {
  let component: BrowseIceCreamComponent;
  let fixture: ComponentFixture<BrowseIceCreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseIceCreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseIceCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
