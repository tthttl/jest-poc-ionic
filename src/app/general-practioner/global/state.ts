import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PersonInUserSwitch } from '../../helpers/model/tracking/model';

export interface UserswitchState {
  readonly users: PersonInUserSwitch[];
  readonly prevSelectedUserPartnerNr?: string;
  readonly selectedUser?: PersonInUserSwitch;
  readonly isOpen: boolean;
  readonly isOkpModelsRequestFinished: boolean;
}

export const initialUserswitchState: UserswitchState = {
  users: [],
  prevSelectedUserPartnerNr: null,
  selectedUser: null,
  isOpen: false,
  isOkpModelsRequestFinished: false
};

export interface GlobalState {
  readonly userswitch: UserswitchState;
}

export const initialGlobalState: GlobalState = {
  userswitch: initialUserswitchState,
};

export const selectUserswitch = createFeatureSelector<UserswitchState>('userswitch');

export const getSelectedUserInUserswitch = createSelector(
  selectUserswitch,
  (state: UserswitchState) => state.selectedUser
);
