import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PhoneEmailValidationService } from '@core/services/phoneValidationService';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-templates-planifie-bilan',
  templateUrl: './templates-planifie-bilan.component.html',
  styleUrls: ['./templates-planifie-bilan.component.less'],
})
export class TemplatesPlanifieBilanComponent implements OnInit {
  planifieForm: FormGroup;
  loading: boolean = false;
  emailIncorrecte: boolean = false;

  constructor(private phoneEmailValidationService: PhoneEmailValidationService, private drawerRef: NzDrawerRef<string>) {}

  ngOnInit() {}

  testEmail() {
    const creerUtilisateurFormValue = this.planifieForm.value;
    this.emailIncorrecte = this.phoneEmailValidationService.valideEmail(creerUtilisateurFormValue.email);
  }

  close(): void {
    this.drawerRef.close();
  }
}
