import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesTableViewComponent } from './rides-table-view.component';

describe('RidesTableViewComponent', () => {
  let component: RidesTableViewComponent;
  let fixture: ComponentFixture<RidesTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
