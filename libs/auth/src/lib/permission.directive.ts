import {
  ChangeDetectorRef,
  Directive,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { isObservable, Subscription } from 'rxjs';
import { AUTH_OPTION, AuthOption } from './auth-options';
import { BaseDirective } from './base.directive';

@Directive({
  selector: '[permission]',
})
export class PermissionDirective extends BaseDirective implements OnChanges {
  @Input()
  permission!: string[];

  constructor(
    @Inject(AUTH_OPTION) option: AuthOption,
    vf: ViewContainerRef,
    cf: ChangeDetectorRef,
    templateRef: TemplateRef<unknown>
  ) {
    super(option, vf, cf, templateRef);

    if (!this.option.hasPermission) {
      throw new Error(
        'you need to add hasPermission condition for permissionDirective to work'
      );
    }
  }
  ngOnChanges(): void {
    if (this.sub) {
      this.sub?.unsubscribe();
      this.sub = new Subscription();
    }

    const hasPermission = this.option.hasPermission(this.permission);
    if (isObservable(hasPermission)) {
      this.sub = hasPermission.subscribe((hasPermission) => {
        this.toggleDisplay(hasPermission);
      });
    } else {
      this.toggleDisplay(hasPermission);
    }
  }
}
