/**
 * CSS customer portal API
 * This API provides access to the customer data of any CSS customer with myCSS / mySanagate access
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support.e-business.portal@css.ch
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface Versichertenkarte {
  cardtitel_1?: string;
  cardtitel_2?: string;
  lastnameFirstname: string;
  phoneNumberServiceline?: string;
  labelServiceline_1?: string;
  labelServiceline_2?: string;
  phonenumberMedgate?: string;
  labelMedgate_1?: string;
  labelMedgate_2?: string;
  homepage: string;
  rechtstraeger_1: string;
  rechtstraeger_2: string;
  cardNr: string;
  cardVersion: string;
  bagNr?: string;
  ahvNr?: string;
  /**
   * date as String: yyyy-MM-dd
   */
  dateOfBirth: string;
  sexLabel?: string;
  sex: Versichertenkarte.SexEnum;
  /**
   * date as String: yyyy-MM-dd
   */
  dateOfExpiry: string;
  /**
   * date as String: yyyy-MM-dd
   */
  validFrom: string;
  /**
   * date as String: yyyy-MM-dd
   */
  gueltigBisdatum: string;
  /**
   * date as String: yyyy-MM-dd
   */
  gueltigVondatum: string;
  cardType: string;
  okpModell?: Versichertenkarte.OkpModellEnum;
  anbieter?: Versichertenkarte.AnbieterEnum;
}

export namespace Versichertenkarte {
  export type SexEnum = 'MAENNLICH' | 'WEIBLICH';
  export const SexEnum = {
    MAENNLICH: 'MAENNLICH' as SexEnum,
    WEIBLICH: 'WEIBLICH' as SexEnum
  };
  export type OkpModellEnum =
    'BILATERALE_VERTRAEGE'
    | 'BONUSVERSICHERUNG'
    | 'GESUNDHEITSPRAXISVERSICHERUNG'
    | 'HAUSARZTVERSICHERUNG'
    | 'MEDIZINISCHER_TELEFONDIENST'
    | 'MULTIMED'
    | 'SONSTIGE'
    | 'STANDARD';
  export const OkpModellEnum = {
    BILATERALEVERTRAEGE: 'BILATERALE_VERTRAEGE' as OkpModellEnum,
    BONUSVERSICHERUNG: 'BONUSVERSICHERUNG' as OkpModellEnum,
    GESUNDHEITSPRAXISVERSICHERUNG: 'GESUNDHEITSPRAXISVERSICHERUNG' as OkpModellEnum,
    HAUSARZTVERSICHERUNG: 'HAUSARZTVERSICHERUNG' as OkpModellEnum,
    MEDIZINISCHERTELEFONDIENST: 'MEDIZINISCHER_TELEFONDIENST' as OkpModellEnum,
    MULTIMED: 'MULTIMED' as OkpModellEnum,
    SONSTIGE: 'SONSTIGE' as OkpModellEnum,
    STANDARD: 'STANDARD' as OkpModellEnum
  };
  export type AnbieterEnum = 'ARCOSANA' | 'AUXILIA' | 'CSS' | 'INTRAS' | 'SANAGATE' | 'ZURICH_CONNECT' | 'ZURICH_LEBEN';
  export const AnbieterEnum = {
    ARCOSANA: 'ARCOSANA' as AnbieterEnum,
    AUXILIA: 'AUXILIA' as AnbieterEnum,
    CSS: 'CSS' as AnbieterEnum,
    INTRAS: 'INTRAS' as AnbieterEnum,
    SANAGATE: 'SANAGATE' as AnbieterEnum,
    ZURICHCONNECT: 'ZURICH_CONNECT' as AnbieterEnum,
    ZURICHLEBEN: 'ZURICH_LEBEN' as AnbieterEnum
  };
}

