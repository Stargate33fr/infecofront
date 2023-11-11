/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesLocatairesQuittanceDeLoyerComponent } from './templates-locataires-quittance-de-loyer.component';
import { SharedTestingModule } from '@core/testing/shared.testing.module.spec';
import { frenchMonthPipeModule } from '@core/pipes/frenchMonth.pipe.module';
import { DatePipe } from '@angular/common';

describe('TemplatesLocatairesQuittanceDeLoyerComponent', () => {
  let component: TemplatesLocatairesQuittanceDeLoyerComponent;
  let fixture: ComponentFixture<TemplatesLocatairesQuittanceDeLoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesLocatairesQuittanceDeLoyerComponent],
      imports: [SharedTestingModule, frenchMonthPipeModule],
      providers: [DatePipe],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesLocatairesQuittanceDeLoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
