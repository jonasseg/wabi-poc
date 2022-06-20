import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}
