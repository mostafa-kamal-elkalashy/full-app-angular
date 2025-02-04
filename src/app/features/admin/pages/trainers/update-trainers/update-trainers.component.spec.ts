import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainersComponent } from './update-trainers.component';

describe('UpdateTrainersComponent', () => {
  let component: UpdateTrainersComponent;
  let fixture: ComponentFixture<UpdateTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTrainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
