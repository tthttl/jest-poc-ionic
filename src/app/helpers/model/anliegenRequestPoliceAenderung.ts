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


export interface AnliegenRequestPoliceAenderung { 
    /**
     * franchise
     */
    franchise: number;
    /**
     * Information from Hausarzt label containing data to identify the chosen Hausarzt, if any
     */
    labelHausarzt?: string;
    /**
     * policen number / versicherte person policies unique identifier
     */
    policenNr: string;
    /**
     * prettyPrint: text containing html line breaks (&lt;br&gt;) and bold for metadata (&lt;b&gt;). Language is according to portal settings. Text will be visible for logged in person. Max. 3000 chars!
     */
    prettyPrint: string;
    /**
     * if Unfalldeckung is included
     */
    withUnfalldeckung: boolean;
    /**
     * date as String: yyyy-MM-dd
     */
    validFrom: string;
    /**
     * Partner number (internal unique identifier) for which the change should be made
     */
    versichertePersonPartnerNr: string;
    /**
     * name of chosen Versicherungsmodell
     */
    versicherungsModell: string;
}
