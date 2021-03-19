import { AuthorizedPerson } from '../authorizedPerson';
import { GrundversicherungsTypWrapper } from '../grundversicherungsTypWrapper';
import { Versichertenkarte } from '../versichertenkarte';
import { VersichertePerson } from '../versichertePerson';

export interface TrackingCookieUserInfo {
  readonly gender: string;
  readonly dateOfBirth: string;
  readonly postalCode: string;
  readonly townNr: string;
  readonly onrp: number;
}

export interface VersichertenkarteExtended extends Versichertenkarte {
  userId?: string;
}

export interface RestbetragAndPayedTotal {
  restbetrag: number;
  payedTotal: number;
}

export interface Coordinate {
  lat: number;
  lng: number;
}


export interface File {
  fileName: string;
  fileSize: number;
  fileRef: string;
  version?: string;
}

export interface FilterValues {
  dateFrom: string;
  dateTo: string;
  amountFrom: number;
  amountTo: number;
}

export interface LeistungsabrechnungFilterValues extends FilterValues {
  statusLabel: string;
  sparten: string[];
}

export interface PraemienabrechnungFilterValues extends FilterValues {
  statusLabel: string;
  sparten: string[];
}


export interface FilterStatusItem {
  value: string;
  label: string;
}


export interface Hausarzt {
  name: string;
  adresse: string;
  nummer: string;
  plz: string;
  ort: string;
  telefon: string;
  land?: string;
}

export interface Help {
  tips?: string;
  text?: string;
  textTitle?: string;
  pdf?: File;
  videoTitle?: string;
  youtubeId?: string;
  autoplay?: string;
}

export interface Hintergrundbilder {
  backgroundImageUriSmall: string;
  backgroundImageUriMedium: string;
}

export interface Marker extends Coordinate {
  id: string;
}

export interface OkpModelInfo {
  valid: boolean;
  isStandard: boolean;
  label: string;
  description: string;
}

export interface QuitDialogLabels {
  title?: string;
  message?: string;
  cancelButtonLabel?: string;
  submitButtonLabel?: string;
}

export interface RatingLabels {
  title?: string;
  message?: string;
  rateButtonLabel?: string;
  laterButtonLabel?: string;
  cancelButtonLabel?: string;
}

export interface DeprecatedAppVersionDialogLabels {
  title?: string;
  message?: string;
  updateButtonLabel?: string;
}

export interface OutdatedAppVersionDialogLabels {
  title?: string;
  message?: string;
  updateButtonLabel?: string;
  askLaterButtonLabel?: string;
}

export interface AppInfoLabels {
  okButtonLabel?: string;
}

export interface OauthInfo {
  access_token: string;
  token_type: string;
}

export interface OauthResponse extends OauthInfo {
  expires_in: number;
  scope: string;
}

export interface UserAccount {
  isLoggedIn: boolean;
  oauth?: OauthInfo;
}

export interface PersonInUserSwitch extends VersichertePerson {
  isMainPerson?: boolean;
  profileFoto?: string;
  franchiseRestbetrag?: number;
  praemie?: number;
  payedFranchiseTotal?: number;
  payedSelbstbehaltTotal?: number;
  okpModel?: GrundversicherungsTypWrapper;
  addresses?: Address[];
}

export interface Userswitch {
  users: PersonInUserSwitch[];
  selectedUser?: PersonInUserSwitch;
  isOpen: boolean;
  isOkpModelsRequestFinished: boolean;
}

// TODO convert to type?
export enum RechnungType {
  PRAEMIENABRECHNUNG,
  LEISTUNGSABRECHNUNG,
  LEISTUNGSRECHNUNG
}

export class OptionModel<T> {
  // tslint:disable-next-line:variable-name
  constructor(private _key: string, private _label: string, private _value?: T) {
  }

  get key(): string {
    return this._key;
  }

  get label(): string {
    return this._label;
  }

  get value(): T {
    return this._value;
  }
}

export class OptionModelList<T> {
  // tslint:disable-next-line:variable-name
  constructor(private _options: Array<OptionModel<T>>) {
  }

  get options(): Array<OptionModel<T>> {
    return this._options;
  }

  public itemAt(idx: number): OptionModel<T> {
    return this._options[idx];
  }

  public getForKey(key: string): OptionModel<T> {
    return this._options.find((opt) => opt.key === key);
  }

  public getForValue(val: T): OptionModel<T> {
    return this._options.find((opt) => opt.value === val);
  }
}

export class LoginData {
  public static readonly STORAGE_KEY = 'logindata';
  public personen: PersonInUserSwitch[];
  public sprache?: string;
}


export interface VersichertenkarteInCssAppState {
  size?: number;
}

export type NotificationMethod = 'email' | 'sms';

export type Step = 'hide' | 'documents' | 'notification' | 'agency';

export interface AgencyInformation {
  agency?: {
    name: string;
    street?: string;
    streetNumber?: string;
    zip?: string;
    city?: string;
    phone?: string;
    email?: string
  };
  consultant?: {
    firstName: string;
    lastName: string;
    phone?: string;
    email?: string;
    imageUrl?: string
  };
  serviceLine?: {
    phone?: string;
  };
}

export type ProgressImmediacy = 'NearTerm' | 'LongTerm';

export type LeistungsrechnungSort =
  'BETRAG_ASC' |
  'BETRAG_DESC' |
  'BEHANDLUNGSDATUMVON_ASC' |
  'BEHANDLUNGSDATUMVON_DESC' |
  'EINGANGSDATUM_ASC' |
  'EINGANGSDATUM_DESC' |
  'LEISTUNGSERBRINGERNAME_ASC' |
  'LEISTUNGSERBRINGERNAME_DESC' |
  'LEISTUNGSRECHNUNGNR_ASC' |
  'LEISTUNGSRECHNUNGNR_DESC' |
  'STATUS_ASC' |
  'STATUS_DESC';
export type LeistungsrechnungDetailSort =
  'BETRAG_ASC' |
  'BETRAG_DESC' |
  'FRANCHISE_ASC' |
  'FRANCHISE_DESC' |
  'LEISTUNG_ASC' |
  'LEISTUNG_DESC' |
  'NAPCODE_ASC' |
  'NAPCODE_DESC' |
  'NICHTVERSICHERT_ASC' |
  'NICHTVERSICHERT_DESC' |
  'PRODUKTART_ASC' |
  'PRODUKTART_DESC' |
  'SELBSTBEHALT_ASC' |
  'SELBSTBEHALT_DESC';
export type LeistungserbringerSort =
  'DISTANCE_ASC'
  | 'DISTANCE_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'ADRESSE_ASC'
  | 'ADRESSE_DESC';
export type PraemienabrechnungOverviewSort =
  'ABRECHNUNGSNUMMER_ASC'
  | 'ABRECHNUNGSNUMMER_DESC'
  | 'AUSGLEICHSTATUS_ASC'
  | 'AUSGLEICHSTATUS_DESC'
  | 'BETRAG_ASC'
  | 'BETRAG_DESC'
  | 'RECHNUNGSDATUM_ASC'
  | 'RECHNUNGSDATUM_DESC'
  | 'RECHNUNGSPERIODEVON_ASC'
  | 'RECHNUNGSPERIODEVON_DESC';
export type LeistungsabrechnungOverviewSort =
  'ABRECHNUNGSDATUM_ASC'
  | 'ABRECHNUNGSDATUM_DESC'
  | 'ABRECHNUNGSNUMMER_ASC'
  | 'ABRECHNUNGSNUMMER_DESC'
  | 'AUSGLEICHSTATUS_ASC'
  | 'AUSGLEICHSTATUS_DESC'
  | 'IHRGUTHABEN_ASC'
  | 'IHRGUTHABEN_DESC'
  | 'UNSERGUTHABEN_ASC'
  | 'UNSERGUTHABEN_DESC';
export type LeistungserbringerMethode = 'EMR_METHODE' | 'GESUNDHEITSFOERDERMASSNAHME';
export type EingangsKanalPortal = 'APP' | 'PORTAL';
export type AnliegenType = 'ALLGEMEINE_FRAGE' | 'FRAGE_ZU_LEISTUNGSABRECHNUNG' | 'KVG_SISTIERUNG';

export interface Address {
  readonly street: string;
  readonly streetNumber: string;
  readonly zip: string;
  readonly city: string;
  readonly townNr?: string;
  readonly onrp?: string;
}

export type LanguageCode = 'de' | 'it' | 'fr' | 'en';

export type InsuranceModel = 'standard' | 'general-practitioner' | 'telmed' | 'multimed' | 'other' | 'unknown';

export interface SearchChange {
  readonly search: string;
  readonly count: number;
}

export type CarrierEnum = 'ARCOSANA' | 'AUXILIA' | 'CSS' | 'INTRAS' | 'SANAGATE' | 'ZURICH_CONNECT' | 'ZURICH_LEBEN';
export type Law = 'IVG' | 'KVG' | 'MVG' | 'OR' | 'UNBEKANNT' | 'UVG' | 'VVG';

export interface PolicyProduct {
  readonly law: Law;
  readonly productNameLabel: string;
}

export interface PolicePremiumPayer {
  readonly policyProducts: PolicyProduct[];
}

export interface BasisInsurancePolicy {
  readonly validFrom: Date;
  readonly validTo: Date;
  readonly carrier: CarrierEnum;
  readonly policePremiumPayers: PolicePremiumPayer[];
}

export interface ComplementaryPolicy {
  readonly contractExpiryDate: Date;
}

export interface AuthorizedPersonPolicies {
  readonly policies: BasisInsurancePolicy[];
  readonly frvPolicies: ComplementaryPolicy[];
  readonly shvPolicies: ComplementaryPolicy[];
  readonly spvPolicies: ComplementaryPolicy[];
}

export const appRateStorageKey = 'apprate';

export const appRateIntervalMonths = 6;



export type AppVersionStatus = 'deprecated' | 'outdated' | 'current';

export interface NativeFileInfo {
  readonly url: string;
  readonly directory: boolean;
  readonly sizeMB: number;
}

export interface CurrentPersons {
  readonly authorizedPerson: AuthorizedPerson;
  readonly selectedPerson: PersonInUserSwitch;
}

export interface AppconnectorPreviewStatus {
  readonly currentVersion: string;
  readonly uri: string;
}

export interface GooglePlacesAutocompleteResponse {
  status: string;
  predictions: any[];
}

export interface GooglePlacesDetailResponse {
  status: string;
  result: {};
  html_attributions: any[];
}

export interface AuthLoginData {
  activationCode: string;
  userID: string;
  activationNotAfter?: string;
  creationDate?: string;
}

export interface SetAppCodeResponse {
  code?: string;
  message?: string;
}

export interface EulaData {
  fileName: string;
  fileSize: number;
  checksum: string;
  uri: string;
}

export interface EulaChecksumLang {
  [lang: string]: string;
}

export interface Adbanner {
  headline1?: string;
  subline1?: string;
  imageUri1?: string;
  buttonLabel1?: string;
  appLandingPageUrl1?: string;
  blurImage1?: string;
  headline2?: string;
  subline2?: string;
  imageUri2?: string;
  buttonLabel2?: string;
  appLandingPageUrl2?: string;
  blurImage2?: string;
  headline3?: string;
  subline3?: string;
  imageUri3?: string;
  buttonLabel3?: string;
  appLandingPageUrl3?: string;
  blurImage3?: string;
}

export interface BannerTeaser {
  headline: string;
  subline: string;
  image: string;
  linkLabel: string;
  landingPageUri: string;
  blurImage: boolean;
}

export type MessageType =
  'ANLIEGEN' |
  'MESSAGE_LEAD' |
  'DOKUMENT' |
  'NOTIFICATION_PRAEMIENABRECHNUNG' |
  'NOTIFICATION_LEISTUNGSABRECHNUNG' |
  'NOTIFICATION_POLICE' |
  'NOTIFICATION_OFFERTE' |
  'NOTIFICATION_EINGEREICHTE_RECHNUNG' |
  'NOTIFICATION_STEUERAUSZUG';

export type MessagesSortParam = 'LAST_UPDATE_ASC' | 'LAST_UPDATE_DESC' | 'TYPE_ASC' | 'TYPE_DESC';

export type LeistungsrechnungStatus = 'ABGERECHNET' | 'IN_BEARBEITUNG' | 'ZURUECKGEWIESEN';

export type BmhType =
  'BEHANDLUNG' |
  'MEDIKAMENT' |
  'IMPFUNG' |
  'HILFSMITTEL' |
  'GESUNDHEITSFOERDERUNG' |
  'UEBRIGE_LEISTUNG';

export type MessageState = 'OPEN' | 'IN_PROGRESS' | 'CLOSED';

export type PushTokenProvider = 'GOOGLE' | 'APPLE' | 'UNKNOWN';

export interface SortOption {
  value: string;
  label: string;
}

export interface UploadModalDismissOptions {
  reload: boolean;
  showNotLEWarning: boolean;
}

export type Environment = 'DEV' | 'INT' | 'VPR' | 'PRD';
export type MandateName = 'CSS' | 'Sanagate';

export interface TextConfigTranslations {
  // lang: de, fr, it, en
  [key: string]: {
    textconfig: {
      produkte: {
        product: {
          // product id: STANDARD, ...
          [key: string]: {
            description: string;
            label: string;
          }
        }
      }
    }
  };
}
