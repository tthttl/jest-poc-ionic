import { Action } from '@ngrx/store';
import { CareProvider } from './model';

export class MultimedGetGeneralPractitionerAction implements Action {
  public readonly type = 'MultimedGetGeneralPractitionerAction';
}

export class MultimedGetGeneralPractitionerSuccessAction implements Action {
  public readonly type = 'MultimedGetGeneralPractitionerSuccessAction';

  constructor(public readonly generalPractitioner: CareProvider) {
  }
}

export class MultimedGetGeneralPractitionerFailedAction implements Action {
  public readonly type = 'MultimedGetGeneralPractitionerFailedAction';
}


export class GlobalApiFailedAction implements Action {
  public readonly type = 'GlobalApiFailedAction';
}

export type GeneralPractitionerActions =
  MultimedGetGeneralPractitionerAction |
  MultimedGetGeneralPractitionerSuccessAction |
  MultimedGetGeneralPractitionerFailedAction |
  GlobalApiFailedAction;
