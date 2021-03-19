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
import { SpvVertragsteil } from './spvVertragsteil';


export interface SpvProdukt { 
    /**
     * product name as string in users portal language
     */
    produkteLabel: string;
    /**
     * total sum Zuschlag and Nachlass
     */
    summeZuNa: number;
    /**
     * Dokumentenpraemie
     */
    dokumentenPraemie: number;
    /**
     * Vertragsteile (Prämie) of versicherte personen and mitversicherte personen ordered
     */
    vertragsteile: Array<SpvVertragsteil>;
}

