import { Action } from '@ngrx/store';
import { of, ReplaySubject } from 'rxjs';
import {
  MultimedGetGeneralPractitionerAction,
  MultimedGetGeneralPractitionerFailedAction,
  MultimedGetGeneralPractitionerSuccessAction
} from '../general-practioner/actions';
import { CareProvider } from '../general-practioner/model';
import { GeneralPractitionerEffects } from './effects';

describe('general-practitioner effects', () => {
  let actions: ReplaySubject<Action>;
  let store: any;
  let multimedService: any;
  let errorHandler: any;

  beforeEach(() => {
    actions = new ReplaySubject<Action>(1);
    store = jasmine.createSpyObj('store', ['select']);
    multimedService = jasmine.createSpyObj('multimedService', ['getGeneralPractitioner']);
    errorHandler = jasmine.createSpyObj('errorHandler', ['handleErrors']);
  });

  it('should not execute getGeneralPractitioner when unhandled action is dispatched', (done) => {
    actions.next({type: 'ANY'});
    setupStore({userId: '1234'});
    const effect = createEffects();
    effect.getGeneralPractitioner.subscribe(() => done.fail());
    setTimeout(done, 100);
  });

  it(`should return ${MultimedGetGeneralPractitionerSuccessAction.name}
   when ${MultimedGetGeneralPractitionerAction.name} is dispatched`, (done) => {
    const expectedUserId = 1234;
    const expectedGeneralPractitioner = {name: 'TestGeneralPractitioner'} as CareProvider;
    setupAction(new MultimedGetGeneralPractitionerAction());
    setupStore({userId: expectedUserId});
    setupMultimedService(expectedGeneralPractitioner);
    setupErrorHandler();
    const effect = createEffects();
    effect.getGeneralPractitioner.subscribe((action) => {
      expect(multimedService.getGeneralPractitioner).toHaveBeenCalledWith(expectedUserId);
      expect(errorHandler.handleErrors).toHaveBeenCalledWith([404]);
      expect(action).toEqual(new MultimedGetGeneralPractitionerSuccessAction(expectedGeneralPractitioner));
      done();
    });
  });

  it(`should return ${MultimedGetGeneralPractitionerFailedAction.name}
   when ${MultimedGetGeneralPractitionerAction.name} is dispatched`, (done) => {
    const expectedUserId = 1234;
    setupAction(new MultimedGetGeneralPractitionerAction());
    setupStore({userId: expectedUserId});
    setupMultimedServiceWithError();
    setupErrorHandler();
    const effect = createEffects();
    effect.getGeneralPractitioner.subscribe((action) => {
      expect(multimedService.getGeneralPractitioner).toHaveBeenCalledWith(expectedUserId);
      expect(errorHandler.handleErrors).toHaveBeenCalledWith([404]);
      expect(action).toEqual(new MultimedGetGeneralPractitionerFailedAction());
      done();
    });
  });

  function setupAction(action: Action) {
    actions.next(action);
  }

  function setupStore(state: any) {
    store.select.and.returnValue(of(state));
  }

  function setupMultimedService(body: any) {
    multimedService.getGeneralPractitioner.and.returnValue(of({body}));
  }

  function setupMultimedServiceWithError() {
    multimedService.getGeneralPractitioner.and.returnValue(new Error('TestError'));
  }

  function setupErrorHandler() {
    errorHandler.handleErrors.and.returnValue((source) => source);
  }

  function createEffects() {
    return new GeneralPractitionerEffects(store, actions as any, multimedService, errorHandler);
  }
});
