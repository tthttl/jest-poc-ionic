import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import {
  MultimedGetGeneralPractitionerAction,
  MultimedGetGeneralPractitionerFailedAction,
  MultimedGetGeneralPractitionerSuccessAction
} from '../general-practioner/actions';
import { GlobalErrorHandlerService } from '../general-practioner/global-error-handler.service';
import { GlobalState } from '../general-practioner/global/state';
import { CareProvider } from '../general-practioner/model';
import { MultimedService } from '../general-practioner/multimed-service';
import { GeneralPractitionerEffects } from './effects';

describe('general-practitioner effects', () => {
  let actions = new Observable<Action>();
  let store: MockStore;
  let multimedService: any;
  let errorHandler: any;
  const initialState = {userId: '1234'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MultimedService,
        GlobalErrorHandlerService,
        provideMockStore({initialState}),
        provideMockActions(() => actions)
      ]
    });

    store = TestBed.inject(MockStore);
    multimedService = TestBed.inject(MultimedService);
    errorHandler = TestBed.inject(GlobalErrorHandlerService);
  });

  it('should not execute getGeneralPractitioner when unhandled action is dispatched', (done) => {
    actions = of({type: 'ANY'});
    store.setState({userId: '1234'});
    const effect = createEffects();
    console.log(effect);
    effect.getGeneralPractitioner.subscribe(() => done.fail());
    setTimeout(done, 100);
  });

  it(`should return ${MultimedGetGeneralPractitionerSuccessAction.name}
   when ${MultimedGetGeneralPractitionerAction.name} is dispatched`, (done) => {
    const expectedUserId = 1234;
    const expectedGeneralPractitioner = {name: 'TestGeneralPractitioner'} as CareProvider;
    setupAction(new MultimedGetGeneralPractitionerAction());
    store.setState({userId: expectedUserId});
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
    store.setState({userId: expectedUserId});
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
    actions = of(action);
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
    return new GeneralPractitionerEffects(store as Store<GlobalState>, actions as any, multimedService, errorHandler);
  }
});
