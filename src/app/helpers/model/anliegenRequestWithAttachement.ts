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


export interface AnliegenRequestWithAttachement { 
    /**
     * prettyPrint: text containing html line breaks (&lt;br&gt;) and bold for metadata (&lt;b&gt;). Language is according to portal settings. Text will be visible for logged in person. Max. 3000 chars!
     */
    prettyPrint: string;
    /**
     * uuids from file upload resource
     */
    uploadUuids: Array<string>;
    /**
     * specifies the kind of anliegen if not unambiguous, mandatory for general request
     */
    eingangsDokumentenKlasse?: AnliegenRequestWithAttachement.EingangsDokumentenKlasseEnum;
}
export namespace AnliegenRequestWithAttachement {
    export type EingangsDokumentenKlasseEnum = 'A_ALLG_INFO' | 'POLICEN_AUFSTELLUNG' | 'LEISTUNGSANLIEGEN';
    export const EingangsDokumentenKlasseEnum = {
        AALLGINFO: 'A_ALLG_INFO' as EingangsDokumentenKlasseEnum,
        POLICENAUFSTELLUNG: 'POLICEN_AUFSTELLUNG' as EingangsDokumentenKlasseEnum,
        LEISTUNGSANLIEGEN: 'LEISTUNGSANLIEGEN' as EingangsDokumentenKlasseEnum
    };
}


