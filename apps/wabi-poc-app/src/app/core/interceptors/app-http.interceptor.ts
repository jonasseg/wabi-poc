import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<HttpResponseBase>, next: HttpHandler): Observable<HttpEvent<HttpResponseBase>> {
    return next.handle(req).pipe(
      filter((event: HttpEvent<HttpResponseBase>) => event instanceof HttpResponse),
      map((event: HttpEvent<HttpResponseBase>) => {
        return event;
      })
    );
  }
}
