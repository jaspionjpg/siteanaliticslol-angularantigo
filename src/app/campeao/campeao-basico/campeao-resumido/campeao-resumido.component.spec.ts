/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CampeaoResumidoComponent } from './campeao-resumido.component';

describe('CampeaoResumidoComponent', () => {
  let component: CampeaoResumidoComponent;
  let fixture: ComponentFixture<CampeaoResumidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeaoResumidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeaoResumidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
