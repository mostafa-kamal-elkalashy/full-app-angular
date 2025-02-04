import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapthreeComponent } from './tapthree.component';

describe('TapthreeComponent', () => {
  let component: TapthreeComponent;
  let fixture: ComponentFixture<TapthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapthreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
