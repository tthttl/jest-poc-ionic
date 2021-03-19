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
import { ShvDeckung } from './shvDeckung';


export interface ShvProdukt { 
    /**
     * version of terms and conditions
     */
    avbVersion: string;
    /**
     * product name as string in users portal language
     */
    produkteLabel: string;
    /**
     * fachliche Schlüssel for this product
     */
    produkteNr: string;
    bruttoPraemie: number;
    /**
     * Zuschlag and Nachlass
     */
    zuNa: number;
    nettoPraemie: number;
    /**
     * ammount excluded ZuNa and StempelSteuer
     */
    dokumentenPraemie: number;
    /**
     * Deckungen of a Shv product
     */
    deckungen: Array<ShvDeckung>;
}
