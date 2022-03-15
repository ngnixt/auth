import {
  ChangeDetectorRef,
  Directive,
  Inject,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AUTH_OPTION, AuthOption } from './auth-options';

@Directive()
export class BaseDirective implements OnDestroy {
  protected sub: Subscription | undefined;

  hasView = false;

  constructor(
    @Inject(AUTH_OPTION) protected option: AuthOption,
    private vf: ViewContainerRef,
    private cf: ChangeDetectorRef,
    private templateRef: TemplateRef<unknown>
  ) {}

  private tryShow() {
    if (!this.hasView) {
      this.vf.createEmbeddedView(this.templateRef);
      this.hasView = true;
      this.cf.markForCheck();
    }
  }

  private tryHide() {
    if (this.hasView) {
      this.vf.clear();
      this.hasView = false;
      this.cf.markForCheck();
    }
  }

  protected toggleDisplay(show: boolean) {
    if (show) {
      this.tryShow();
    } else {
      this.tryHide();
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
