import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpEventType, HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if(event instanceof HttpResponse && event.status >= 200 && event.status <300){
                    console.log('[假装弹出 toast] 请求成功')
                }
            })
        );
    }
}