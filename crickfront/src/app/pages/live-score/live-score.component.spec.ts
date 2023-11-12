import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveScoreComponent } from './live-score.component';

describe('LiveScoreComponent', () => {
  let component: LiveScoreComponent;
  let fixture: ComponentFixture<LiveScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
