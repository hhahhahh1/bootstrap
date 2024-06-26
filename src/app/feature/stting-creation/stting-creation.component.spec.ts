import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SttingCreationComponent } from './stting-creation.component';

describe('SttingCreationComponent', () => {
  let component: SttingCreationComponent;
  let fixture: ComponentFixture<SttingCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SttingCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SttingCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
