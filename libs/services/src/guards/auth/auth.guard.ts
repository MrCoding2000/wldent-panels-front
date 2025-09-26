// src/app/guards/auth.guard.ts
import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService, ToastService} from "@waldent-panels-front/services";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toast = inject(ToastService);

  if (authService.isLoggedIn()) {
    return true;
  }

  // TODO: Translate
  toast.warn('برای دسترسی به این بخش باید وارد شوید.');
  router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then();
  return false;
};
