import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCardViewComponent } from './people-card-view.component';

describe('PeopleCardViewComponent', () => {
  let component: PeopleCardViewComponent;
  let fixture: ComponentFixture<PeopleCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
