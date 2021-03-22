import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { GlobalApiFailedAction } from './actions';
import { GlobalState } from './global/state';

export type AllErrors = 'All';

export function shouldDisplayGlobalError(response: HttpErrorResponse, errorWhitelist?: number[] | AllErrors): boolean {
  if (response.ok || errorWhitelist === 'All' || response.status < 400 || response.status === 401) {
    return false;
  }

  return errorWhitelist === undefined || !(errorWhitelist.indexOf(response.status) > -1);
}

@Injectable()
export class GlobalErrorHandlerService {
  public constructor(private store: Store<GlobalState>) {}

  public handleErrors(errorWhitelist?: number[] | AllErrors): MonoTypeOperatorFunction<any> {
    return (source: Observable<any>) =>
      new Observable((observer) => {
        return source.subscribe({
          next: (response) => observer.next(response),
          error: (response: HttpErrorResponse) => {
            if (shouldDisplayGlobalError(response, errorWhitelist)) {
              this.store.dispatch(new GlobalApiFailedAction());
            }
            observer.error(response);
          },
          complete: () => observer.complete()
        });
      });
  }
}
