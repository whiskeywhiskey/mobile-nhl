import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePageComponent } from './game-page.component';

describe('GamePageComponent', () => {
  let component: GamePageComponent;
  let fixture: ComponentFixture<GamePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
