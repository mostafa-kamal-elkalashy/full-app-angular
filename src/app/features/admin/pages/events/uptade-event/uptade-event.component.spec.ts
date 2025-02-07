import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptadeEventComponent } from './uptade-event.component';

describe('UptadeEventComponent', () => {
  let component: UptadeEventComponent;
  let fixture: ComponentFixture<UptadeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UptadeEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UptadeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
