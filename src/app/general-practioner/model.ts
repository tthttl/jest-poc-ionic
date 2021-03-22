import { Address, LanguageCode } from '../helpers/model/tracking/model';

export type ConsultationType = 'unknown' | 'telmed' | 'doctor' | 'emergency' | 'transfer';

export type MutlimedConsultationIcon =
  'doctor'
  | 'phone'
  | 'behandlung'
  | 'emergency';

export interface Consultations {
  readonly visible: boolean;
  readonly year: string;
  readonly consultations: Consultation[];
}

export interface Consultation {
  readonly type: ConsultationType;
  readonly date: string;
  readonly fromDate?: string;
  readonly toDate?: string;
  readonly title: string;
  readonly transfers?: Transfer[];
  readonly report?: Report;
  readonly provider?: ConsultationProvider;
  readonly document: boolean;
}

export type ConsultationIconMap = {
  readonly [K in ConsultationType]: string;
};

export interface Transfer {
  readonly title: string;
  readonly careProvider: CareProvider;
  readonly isEmergency: boolean;
  readonly timeFrame: TimeFrame;
}

export interface Report {
  readonly title: string;
  readonly provider: ReportingProvider;
}

export interface ReportingProvider {
  readonly type: 'telmed' | 'doctor';
  readonly title?: string;
  readonly city?: string;
  readonly name: string;
  readonly phone: string;
}

export interface ConsultationProvider {
  readonly title: string;
  readonly name: string;
  readonly city: string;
}

export interface CareProvider {
  readonly title: string;
  readonly name: string;
  readonly address: Address;
  readonly addressAvailable: boolean;
  readonly phone: string;
}

export interface TimeFrame {
  readonly id: string;
  readonly fromDate: string;
  readonly toDate: string;
  readonly remainingDays: number;
  readonly totalDays: number;
  readonly renewable: boolean;
  readonly renewableUntilDate: string;
  readonly document: boolean;
}

export interface Slot {
  date: string;
  from: string;
  to: string;
}

export type SlotError = 'taken';

export interface SlotMap {
  [date: string]: Slot[];
}

export interface CallbackRequestInputData {
  phoneNumber: string;
  symptoms: string;
}

export interface CallbackRequestSubmit {
  readonly form: CallbackRequestInputData;
  readonly valid: boolean;
}

export type UploadErrors = 'max-size' | 'max-accumulated-size' | 'max-files' | 'file-extension' | 'network';

export interface UploadErrorWithMetadata {
  readonly error: UploadErrors;
  readonly fileName: string;
}

export interface FileAndArrayBuffer {
  readonly file: File;
  readonly arrayBuffer: ArrayBuffer;
}

export interface UploadFile extends FileAndArrayBuffer {
  readonly metadata: UploadFileMetadata;
  readonly errors: UploadErrorWithMetadata[];
}

export interface UploadFileMetadata {
  readonly id: string;
  readonly extension: string;
  readonly name: string;
  readonly size: number;
  readonly type: string;
  readonly uploading: boolean;
  readonly uploadPercentage: number;
  readonly uploaded: boolean;
  readonly removable: boolean;
}

export interface FileUploadResponse {
  readonly id?: string;
  readonly progress: number;
}

export interface CallbackAppointmentResponse {
  readonly callbackPossible: boolean;
  readonly callbackAppointments: CallbackAppointment[];
}

export interface CallbackAppointment {
  readonly id: number;
  readonly date: string;
  readonly from: string;
  readonly to: string;
}

export interface CallbackAppointmentUpdateState {
  readonly id: number;
  readonly updating: boolean;
  readonly locked: boolean;
}

export interface CallbackRequest {
  language: LanguageCode;
  symptoms: string;
  phoneNumber: string;
  slot: Slot;
  attachmentIds?: string[];
}

export interface TimeFrameToExtend {
  readonly id: string;
  readonly renewableUntilDate: string;
  readonly consultationsOfYearIndex: number;
  readonly consultationIndex: number;
  readonly transferIndex: number;
}

export interface EmergencyRequestInformation {
  canRequestEmergencySlot: boolean;
  availableIncidentDates: Date[];
}
