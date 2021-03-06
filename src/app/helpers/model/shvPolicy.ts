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
import { VersichertePerson } from './versichertePerson';
import { ShvProdukt } from './shvProdukt';
import { Versicherungsort } from './versicherungsort';


/**
 * A Shv policy
 */
export interface ShvPolicy { 
    /**
     * Shv Policy unique identifier
     */
    policenNr: string;
    versichertePerson: VersichertePerson;
    /**
     * document identifier to load from resouce /dokumentenverwaltung
     */
    dokumentNr?: string;
    /**
     * date as String: yyyy-MM-dd
     */
    vertragsbeginn: string;
    /**
     * date as String: yyyy-MM-dd
     */
    vertragsende: string;
    /**
     * true if shv police document is available
     */
    dokumentAvailable: boolean;
    /**
     * true if shv police will be extended automatically
     */
    automatischeVerlaengerung: boolean;
    /**
     * how is the police paid 
     */
    zahlwegLabel?: string;
    /**
     * zahlungsperiode
     */
    zahlungsPeriode: string;
    /**
     * Privatehaftpflicht, Hausrat
     */
    policenLabel?: Array<string>;
    /**
     * Erstellungsgrund
     */
    erstellungsgrundLabel: string;
    /**
     * total ammount of police included: Rabatte, Zuschläge, Stempelsteuer und Ratenzuschlag
     */
    bruttoPraemie: number;
    /**
     * ammount that 
     */
    rechnungsPraemie: number;
    /**
     * ratenzuschlag
     */
    ratenzuschlag: number;
    versicherungsort?: Versicherungsort;
    /**
     * products of a Shv police
     */
    produkte: Array<ShvProdukt>;
}

