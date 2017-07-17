/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CampeaoComponent } from './campeao.component';

describe('CampeaoComponent', () => {
  let component: CampeaoComponent;
  let fixture: ComponentFixture<CampeaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
