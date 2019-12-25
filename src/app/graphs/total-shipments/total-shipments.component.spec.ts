import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalShipmentsComponent } from './total-shipments.component';

describe('TotalShipmentsComponent', () => {
  let component: TotalShipmentsComponent;
  let fixture: ComponentFixture<TotalShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
