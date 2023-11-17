import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingKeys } from '@core/rounting/routing-keys';
import { Logout } from '@core/store/actions/auth.action';
import { getUtilisateur } from '@core/store/selectors/utilisateur.selector';
import { IAppState } from '@core/store/state/app.state';
import { environment } from '@environment';
import { User } from '@models/user';
import { select, Store } from '@ngrx/store';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Subject } from 'rxjs';
import { TemplatesPlanifieBilanComponent } from '../../templates-planifie-bilan/templates-planifie-bilan.component';

@Component({
  selector: 'organismes-header',
  templateUrl: './organismes-header.component.html',
  styleUrls: ['./organismes-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganismesHeaderComponent implements OnInit {
  routingKeys = RoutingKeys;
  user!: User;
  version = environment.context.app.version;
  destroy$: Subject<void> = new Subject<void>();
  utilisateur$: Observable<User>;

  cheminLogo = `/assets/img/logo_idimmo_${environment.context.app.env}.png`;

  constructor(private store: Store<IAppState>, private route: ActivatedRoute, private drawerService: NzDrawerService) {}

  ngOnInit() {
    this.utilisateur$ = this.store.pipe(select(getUtilisateur));
  }

  planifieEnvoi() {
    const drawerRef = this.drawerService.create<TemplatesPlanifieBilanComponent>({
      nzTitle: 'Planification',
      nzContent: TemplatesPlanifieBilanComponent,
    });
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }
}
