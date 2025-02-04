import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LestTrainersComponent } from './lest-trainers.component';

describe('LestTrainersComponent', () => {
  let component: LestTrainersComponent;
  let fixture: ComponentFixture<LestTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LestTrainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LestTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
