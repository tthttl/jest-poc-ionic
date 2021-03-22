import { CareProvider } from './model';

export interface MultimedGeneralPractitionerState {
  readonly loading: boolean;
  readonly loadedGeneralPractitionerSuccessfully: boolean;
  readonly generalPractitioner: CareProvider | null;
}

export const initialMultimedGeneralPractitionerState: MultimedGeneralPractitionerState = {
  loading: false,
  loadedGeneralPractitionerSuccessfully: false,
  generalPractitioner: null
};
