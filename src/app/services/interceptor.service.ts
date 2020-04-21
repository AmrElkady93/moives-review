import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpInterceptor
} from "@angular/common/http";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedReq = req.clone({
      params: new HttpParams().set(
        "api_key",
        "2870711508af960685733ad85f1fd4bf"
      )
    });
    return next.handle(modifiedReq);
  }
}
