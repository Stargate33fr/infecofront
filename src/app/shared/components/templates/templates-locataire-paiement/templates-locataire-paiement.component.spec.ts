/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemplatesLocatairePaiementComponent } from './templates-locataire-paiement.component';
import { SharedTestingModule } from '@core/testing/shared.testing.module.spec';
import { OrganismesModalPaiementModule } from '@organismes/organismes-modal-paiement/organismes-modal-paiement.module';

describe('TemplatesLocatairePaiementComponent', () => {
  let component: TemplatesLocatairePaiementComponent;
  let fixture: ComponentFixture<TemplatesLocatairePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesLocatairePaiementComponent],
      imports: [SharedTestingModule, OrganismesModalPaiementModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesLocatairePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
