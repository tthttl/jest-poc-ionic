/**
 * CSS customer portal API: Vertrag
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface SimplePolice { 
    /**
     * Policy unique identifier
     */
    policenNr: string;
    /**
     * document identifier to load from resouce /dokumentenverwaltung
     */
    dokumentNr?: string;
    /**
     * date as String: yyyy-MM-dd
     */
    validFrom: string;
    /**
     * date as String: yyyy-MM-dd
     */
    validTo: string;
    anbieterLabel?: string;
    /**
     * total montly premium
     */
    total: number;
    versichertepersonVornameNachname?: string;
}

