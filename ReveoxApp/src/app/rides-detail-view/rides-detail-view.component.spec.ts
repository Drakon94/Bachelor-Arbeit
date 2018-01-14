import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesDetailViewComponent } from './rides-detail-view.component';

describe('RidesDetailViewComponent', () => {
  let component: RidesDetailViewComponent;
  let fixture: ComponentFixture<RidesDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
