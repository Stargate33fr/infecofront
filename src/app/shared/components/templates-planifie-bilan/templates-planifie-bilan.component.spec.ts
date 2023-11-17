/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemplatesPlanifieBilanComponent } from './templates-planifie-bilan.component';

describe('TemplatesPlanifieBilanComponent', () => {
  let component: TemplatesPlanifieBilanComponent;
  let fixture: ComponentFixture<TemplatesPlanifieBilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesPlanifieBilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesPlanifieBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
