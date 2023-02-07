import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroispointsComponent } from './troispoints.component';

describe('TroispointsComponent', () => {
  let component: TroispointsComponent;
  let fixture: ComponentFixture<TroispointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroispointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroispointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
