import {
  MultimedGetGeneralPractitionerAction,
  MultimedGetGeneralPractitionerFailedAction,
  MultimedGetGeneralPractitionerSuccessAction
} from '../general-practioner/actions';
import { CareProvider } from '../general-practioner/model';
import { initialMultimedGeneralPractitionerState } from '../general-practioner/state';
import { multimedGeneralPractitionerReducer } from './reducers';

describe('general-practitioner reducer', () => {

  it('should initialize with initialState when state is undefined', () => {
    const newState = multimedGeneralPractitionerReducer(undefined, {type: 'INIT'} as any);
    expect(newState).toEqual(initialMultimedGeneralPractitionerState);
  });

  it(`should have state with loading true when ${MultimedGetGeneralPractitionerAction.name}`, () => {
    const expectedState = {
      ...initialMultimedGeneralPractitionerState,
      loading: true
    };
    const newState = multimedGeneralPractitionerReducer(undefined, new MultimedGetGeneralPractitionerAction());
    expect(newState).toEqual(expectedState);
  });

  it(`should have state with loading false, loadedGeneralPractitionerSuccessfully true and careProvider
   when ${MultimedGetGeneralPractitionerSuccessAction.name}`, () => {
    const expectedCareProvider = {name: 'TestGeneralPractitioner'} as CareProvider;
    const expectedState = {
      ...initialMultimedGeneralPractitionerState,
      loading: false,
      loadedGeneralPractitionerSuccessfully: true,
      generalPractitioner: expectedCareProvider
    };
    const newState = multimedGeneralPractitionerReducer(undefined, new MultimedGetGeneralPractitionerSuccessAction(expectedCareProvider));
    expect(newState).toEqual(expectedState);
  });

  it(`should have state with loading false, loadedGeneralPractitionerSuccessfully false and no careProvider
   when ${MultimedGetGeneralPractitionerFailedAction.name}`, () => {
    const expectedState = {
      ...initialMultimedGeneralPractitionerState,
      loading: false,
      loadedGeneralPractitionerSuccessfully: false,
      generalPractitioner: null
    };
    const newState = multimedGeneralPractitionerReducer(undefined, new MultimedGetGeneralPractitionerFailedAction());
    expect(newState).toEqual(expectedState);
  });

});
