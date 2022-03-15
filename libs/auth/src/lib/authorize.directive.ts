import {
  ChangeDetectorRef,
  Directive,
  Inject,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { isObservable } from 'rxjs';
import { AuthOption, AUTH_OPTION } from './auth-options';
import { BaseDirective } from './base.directive';

@Directive({
  selector: '[authorize]',
})
export class AuthorizeDirective
  extends BaseDirective
  implements OnInit, OnDestroy
{
  constructor(
    @Inject(AUTH_OPTION) option: AuthOption,
    vf: ViewContainerRef,
    cf: ChangeDetectorRef,
    templateRef: TemplateRef<unknown>
  ) {
    super(option, vf, cf, templateRef);
  }

  ngOnInit(): void {
    const isAuthorized = this.option.isAuthorized();
    if (isObservable(isAuthorized)) {
      this.sub = isAuthorized.subscribe((isAuthorized) => {
        this.toggleDisplay(isAuthorized);
      });
    } else {
      this.toggleDisplay(isAuthorized);
    }
  }
}
