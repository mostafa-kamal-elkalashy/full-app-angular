import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaponeComponent } from './tapone.component';

describe('TaponeComponent', () => {
  let component: TaponeComponent;
  let fixture: ComponentFixture<TaponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaponeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
