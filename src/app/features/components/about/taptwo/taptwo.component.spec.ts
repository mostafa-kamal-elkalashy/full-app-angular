import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaptwoComponent } from './taptwo.component';

describe('TaptwoComponent', () => {
  let component: TaptwoComponent;
  let fixture: ComponentFixture<TaptwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaptwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
