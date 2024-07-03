import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingsComponent } from './sittings.component';

describe('SittingsComponent', () => {
  let component: SittingsComponent;
  let fixture: ComponentFixture<SittingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SittingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
