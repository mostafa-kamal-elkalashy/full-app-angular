import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainersComponent } from './create-trainers.component';

describe('CreateTrainersComponent', () => {
  let component: CreateTrainersComponent;
  let fixture: ComponentFixture<CreateTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTrainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
