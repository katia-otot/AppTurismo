import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRecommendationComponent } from './place-recommendation.component';

describe('PlaceRecommendationComponent', () => {
  let component: PlaceRecommendationComponent;
  let fixture: ComponentFixture<PlaceRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceRecommendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
