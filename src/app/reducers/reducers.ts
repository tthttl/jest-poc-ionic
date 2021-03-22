import { GeneralPractitionerActions } from '../general-practioner/actions';
import { initialMultimedGeneralPractitionerState, MultimedGeneralPractitionerState } from '../general-practioner/state';

export function multimedGeneralPractitionerReducer(
  state: MultimedGeneralPractitionerState = initialMultimedGeneralPractitionerState,
  action: GeneralPractitionerActions
): MultimedGeneralPractitionerState {
  switch (action.type) {
    case 'MultimedGetGeneralPractitionerAction': {
      return {
        ...state,
        loading: true
      };
    }
    case 'MultimedGetGeneralPractitionerSuccessAction': {
      return {
        ...state,
        generalPractitioner: action.generalPractitioner,
        loadedGeneralPractitionerSuccessfully: true,
        loading: false
      };
    }
    case 'MultimedGetGeneralPractitionerFailedAction': {
      return {
        ...state,
        generalPractitioner: null,
        loadedGeneralPractitionerSuccessfully: false,
        loading: false
      };
    }
    default:
      return state;
  }
}
