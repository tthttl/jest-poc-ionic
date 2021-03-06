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


export interface PraemienTeaser { 
    /**
     * basic insurance
     */
    grundversicherung: number;
    /**
     * monthly premium
     */
    praemie: number;
    /**
     * complementary insurance
     */
    zusatzversicherung: number;
}

