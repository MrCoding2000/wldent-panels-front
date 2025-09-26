import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { catchError, switchMap, throwError } from 'rxjs';
import {AuthService} from "../auth/auth.service";

export const ErrorHandlerInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService: AuthService = inject(AuthService);
  const toastService: ToastService = inject(ToastService);

  const accessToken = authService.accessToken;
  const authReq = accessToken
    ? req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } })
    : req;

  return next(authReq).pipe(
    catchError((error: any) => {
      // 401 Error Handler
      if (error.status === 401 && authService.refreshToken) {
        return authService.refreshTokenFn().pipe(
          switchMap((newToken: string) => {
            authService.setTokens(newToken, authService.refreshToken!);
            const retryReq = req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
            return next(retryReq);
          }),
          catchError((err) => {
            toastService.error('توکن منقضی شده است. لطفاً دوباره وارد شوید.');
            authService.clearTokens();
            return throwError(() => err);
          })
        );
      }

      //Other Error Handlers
      let message = 'خطای ناشناخته رخ داد.';
      switch (error.status) {
        case 0: message = 'ارتباط با سرور برقرار نشد.'; break;
        case 400: message = 'درخواست نامعتبر است.'; break;
        case 403: message = 'شما به این بخش دسترسی ندارید.'; break;
        case 404: message = 'منبع مورد نظر یافت نشد.'; break;
        case 500: message = 'خطای داخلی سرور. لطفاً دوباره تلاش کنید.'; break;
      }

      toastService.error(message);
      console.error('HTTP Error:', error.status, error.message);
      return throwError(() => new Error(message));
    })
  );
};
