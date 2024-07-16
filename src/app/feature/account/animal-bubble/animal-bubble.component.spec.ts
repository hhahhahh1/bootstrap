import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBubbleComponent } from './animal-bubble.component';

describe('AnimalBubbleComponent', () => {
  let component: AnimalBubbleComponent;
  let fixture: ComponentFixture<AnimalBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
