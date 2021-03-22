import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, filter, map, withLatestFrom } from 'rxjs/operators';
import {
  GeneralPractitionerActions,
  MultimedGetGeneralPractitionerAction, MultimedGetGeneralPractitionerFailedAction,
  MultimedGetGeneralPractitionerSuccessAction
} from '../general-practioner/actions';
import { GlobalErrorHandlerService } from '../general-practioner/global-error-handler.service';
import { getSelectedUserInUserswitch, GlobalState } from '../general-practioner/global/state';
import { CareProvider } from '../general-practioner/model';
import { MultimedService } from '../general-practioner/multimed-service';
import { VersichertePerson } from '../helpers/model/versichertePerson';


@Injectable()
export class GeneralPractitionerEffects {
  @Effect() public getGeneralPractitioner = this.actions.pipe(
    filter((action: GeneralPractitionerActions) => action instanceof MultimedGetGeneralPractitionerAction
    ),
    withLatestFrom(this.store.select<VersichertePerson>(getSelectedUserInUserswitch)),
    exhaustMap(([_, selectedUser]) => {
      return this.multimedService.getGeneralPractitioner(selectedUser.userId).pipe(
        this.errorHandler.handleErrors([404]),
        map((response: HttpResponse<CareProvider>) =>
            new MultimedGetGeneralPractitionerSuccessAction(response.body)
        ),
        catchError(() => of(new MultimedGetGeneralPractitionerFailedAction()))
      );
    })
  );

  constructor(
    private store: Store<GlobalState>,
    private actions: Actions,
    private multimedService: MultimedService,
    private errorHandler: GlobalErrorHandlerService
  ) {}
}
