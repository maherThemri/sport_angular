import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerroComponent } from './herro.component';

describe('HerroComponent', () => {
  let component: HerroComponent;
  let fixture: ComponentFixture<HerroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
