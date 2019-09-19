/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LigneComponent } from './ligne.component';

describe('LigneComponent', () => {
  let component: LigneComponent;
  let fixture: ComponentFixture<LigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
