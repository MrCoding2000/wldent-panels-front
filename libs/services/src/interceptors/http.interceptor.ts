import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {ConfigModel} from "@waldent-panels-front/models";
import {AuthService, CORE_CONFIG} from "@waldent-panels-front/services";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const accessToken = auth.accessToken;
  const config: ConfigModel = inject<ConfigModel>(CORE_CONFIG);
  if (!accessToken) return next(req);

  const authReq = req.clone({
    url: `${config.API_URL}/${req.url}`,
    setHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return next(authReq);
};
