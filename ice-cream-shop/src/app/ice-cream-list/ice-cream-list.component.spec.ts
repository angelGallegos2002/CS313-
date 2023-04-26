import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamListComponent } from './ice-cream-list.component';

describe('IceCreamListComponent', () => {
  let component: IceCreamListComponent;
  let fixture: ComponentFixture<IceCreamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceCreamListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceCreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
