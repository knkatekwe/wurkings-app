import {
	HttpEvent,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse,
	HttpInterceptor,
	HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpErrorIntercept implements HttpInterceptor {
	constructor(private alert: MessageModalService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			retry(1),
			tap((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse && event.status === 200) {
					//this.alert.confirm('', event.body.message, 'Ok')
					//console.log(event)
				}
				if (event instanceof HttpResponse && event.status === 201) {
					//this.alert.confirm('', 'Status created', 'Ok')
					//console.log(event)
				}
				if (event instanceof HttpResponse && event.status === 204) {
					this.alert.confirm('Message', 'No content', 'Ok');
					console.log(event);
				}
			}),
			catchError((error: HttpErrorResponse) => {
				let errorMessage = '';

        if (error.error instanceof ErrorEvent && error.status === 400) {
          //this.alert.confirm('Message', error.error.message, 'Ok');
          console.log(error)
				}
				if (error.error instanceof ErrorEvent && error.status === 401) {
          //this.alert.confirm('Message', error.error.message, 'Ok');
          console.log(error)
        }
        if (error.error instanceof ErrorEvent && error.status === 403) {
          //this.alert.confirm('Message', error.error.message, 'Ok');
          console.log(error)
        }
        if (error.error instanceof ErrorEvent && error.status === 404) {
          //this.alert.confirm('Message', 'Oops, found nothing!', 'Ok');
          console.log(error)
				}
				if (error.error instanceof ErrorEvent && error.status === 422) {
          //this.alert.confirm('Message', error.error.message, 'Ok');
          console.log(error)
				} else {
          // server-side error
          //this.alert.confirm('Message', error.error.message, 'Ok');
          console.log(error)
				}
				console.log(errorMessage);
				return throwError(errorMessage);
			})
		);
	}
}
