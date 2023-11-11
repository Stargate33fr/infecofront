/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemplatesLocataireEtatDesLieuxComponent } from './templates-locataire-etat-des-lieux.component';
import { SharedTestingModule } from '@core/testing/shared.testing.module.spec';
import { MoleculesDatePickerModule } from '../../molecules/molecules-datePicker/molecules-datePicker.module';
import { FormsModule } from '@angular/forms';

describe('TemplatesLocataireEtatDesLieuxComponent', () => {
  let component: TemplatesLocataireEtatDesLieuxComponent;
  let fixture: ComponentFixture<TemplatesLocataireEtatDesLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesLocataireEtatDesLieuxComponent],
      imports: [SharedTestingModule, MoleculesDatePickerModule, FormsModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesLocataireEtatDesLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
