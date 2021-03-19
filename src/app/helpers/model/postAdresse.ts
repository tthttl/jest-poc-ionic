/**
 * CSS customer portal API
 * This API provides access to the customer data of any CSS customer with myCSS access
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support.e-business.portal@css.ch
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface PostAdresse {
    adressNr?: string;
    adresseVerwendungLabel?: string;
    /**
     * how address is used, e.g. as place of residence
     */
    adressVerwendung?: PostAdresse.AdressVerwendungEnum;
    /**
     * dditional information about the address
     */
    adressZusatz1?: string;
    /**
     * dditional information about the address
     */
    adressZusatz2?: string;
    /**
     * additional information about the address
     */
    adressZusatz3?: string;
    /**
     * crm unique identifier for the city
     */
    gemeindeNummer?: string;
    /**
     * date as String: yyyy-MM-dd
     */
    validTo: string;
    /**
     * date as String: yyyy-MM-dd
     */
    validFrom: string;
    /**
     * house / street number
     */
    hausnummer?: string;
    kantonLabel?: string;
    /**
     * canton as number
     */
    kanton?: PostAdresse.KantonEnum;
    landLabel?: string;
    land: PostAdresse.LandEnum;
    /**
     * city
     */
    ort?: string;
    /**
     * zip
     */
    postleitzahl?: string;
    /**
     * street
     */
    strasse?: string;
    /**
     * onrp
     */
    onrp?: string;
}
export namespace PostAdresse {
    export type AdressVerwendungEnum = 'GESETZLICHER_WOHNSITZ' | 'HANDELSREGISTERADRESSE' | 'HAUPTSITZ' | 'POSTADRESSE' | 'STANDORT' | 'TEMPORAERE_ADRESSE';
    export const AdressVerwendungEnum = {
        GESETZLICHERWOHNSITZ: 'GESETZLICHER_WOHNSITZ' as AdressVerwendungEnum,
        HANDELSREGISTERADRESSE: 'HANDELSREGISTERADRESSE' as AdressVerwendungEnum,
        HAUPTSITZ: 'HAUPTSITZ' as AdressVerwendungEnum,
        POSTADRESSE: 'POSTADRESSE' as AdressVerwendungEnum,
        STANDORT: 'STANDORT' as AdressVerwendungEnum,
        TEMPORAEREADRESSE: 'TEMPORAERE_ADRESSE' as AdressVerwendungEnum
    };
    export type KantonEnum = 'AARGAU' | 'APPENZELL_AUSSERRHODEN' | 'APPENZELL_INNERRHODEN' | 'BASEL_LANDSCHAFT' | 'BASEL_STADT' | 'BERN' | 'BILATERALE_VERTRAEGE_CH_EU' | 'DIVERSE' | 'FRIBOURG' | 'FUERSTENTUM_LICHTENSTEIN' | 'GENF' | 'GLARUS' | 'GRAUBUENDEN' | 'JURA' | 'LUZERN' | 'NEUENBURG' | 'NIDWALDEN' | 'OBWALDEN' | 'SCHAFFHAUSEN' | 'SCHWYZ' | 'SOLOTHURN' | 'ST_GALLEN' | 'THURGAU' | 'TICINO' | 'URI' | 'VAUD' | 'WALLIS' | 'ZUERICH' | 'ZUG';
    export const KantonEnum = {
        AARGAU: 'AARGAU' as KantonEnum,
        APPENZELLAUSSERRHODEN: 'APPENZELL_AUSSERRHODEN' as KantonEnum,
        APPENZELLINNERRHODEN: 'APPENZELL_INNERRHODEN' as KantonEnum,
        BASELLANDSCHAFT: 'BASEL_LANDSCHAFT' as KantonEnum,
        BASELSTADT: 'BASEL_STADT' as KantonEnum,
        BERN: 'BERN' as KantonEnum,
        BILATERALEVERTRAEGECHEU: 'BILATERALE_VERTRAEGE_CH_EU' as KantonEnum,
        DIVERSE: 'DIVERSE' as KantonEnum,
        FRIBOURG: 'FRIBOURG' as KantonEnum,
        FUERSTENTUMLICHTENSTEIN: 'FUERSTENTUM_LICHTENSTEIN' as KantonEnum,
        GENF: 'GENF' as KantonEnum,
        GLARUS: 'GLARUS' as KantonEnum,
        GRAUBUENDEN: 'GRAUBUENDEN' as KantonEnum,
        JURA: 'JURA' as KantonEnum,
        LUZERN: 'LUZERN' as KantonEnum,
        NEUENBURG: 'NEUENBURG' as KantonEnum,
        NIDWALDEN: 'NIDWALDEN' as KantonEnum,
        OBWALDEN: 'OBWALDEN' as KantonEnum,
        SCHAFFHAUSEN: 'SCHAFFHAUSEN' as KantonEnum,
        SCHWYZ: 'SCHWYZ' as KantonEnum,
        SOLOTHURN: 'SOLOTHURN' as KantonEnum,
        STGALLEN: 'ST_GALLEN' as KantonEnum,
        THURGAU: 'THURGAU' as KantonEnum,
        TICINO: 'TICINO' as KantonEnum,
        URI: 'URI' as KantonEnum,
        VAUD: 'VAUD' as KantonEnum,
        WALLIS: 'WALLIS' as KantonEnum,
        ZUERICH: 'ZUERICH' as KantonEnum,
        ZUG: 'ZUG' as KantonEnum
    };
    export type LandEnum = 'AEGYPTEN' | 'AEQUATORIAL_GUINEA' | 'AETHIOPIEN' | 'AFGHANISTAN' | 'ALANDINSELN' | 'ALBANIEN' | 'ALGERIEN' | 'AMERIKANISCH_SAMOA' | 'ANDORRA' | 'ANGOLA' | 'ANGUILLA' | 'ANTARKTIS' | 'ANTIGUA_UND_BARBUDA' | 'ARGENTINIEN' | 'ARMENIEN' | 'ARUBA' | 'ASERBAIDSCHAN' | 'AUSTRALIEN' | 'BAHAMAS' | 'BAHRAIN' | 'BANLADESH' | 'BARBADOS' | 'BELARUS' | 'BELGIEN' | 'BELIZE' | 'BENIN' | 'BERMUDA' | 'BHUTAN' | 'BOLIVIEN' | 'BOSNIEN_HERZEGOWINA' | 'BOTSWANA' | 'BRASILIEN' | 'BRITISH_VIRGIN_ISLANDS' | 'BRITSICH_INDISCHER_OZEAN' | 'BRUNEI' | 'BULGARIEN' | 'BURKINA_FASO' | 'BURMA_MYANMAR' | 'BURUNDI' | 'CAYMAN_ISLANDS' | 'CHILE' | 'CHINA_TAIWAN' | 'CHINA_VOLKSREPUBLIK' | 'COOK_ISLANDS' | 'COSTA_RICA' | 'COTE_D_IVOIRE' | 'CURACAO' | 'DAENEMARK' | 'DEUTSCHLAND' | 'DJIBOUTI' | 'DOMINICA' | 'DOMINIKANISCHE_REPUBLIK' | 'EKUADOR' | 'ERITREA' | 'ESTLAND' | 'FAEROEER_INSELN' | 'FALKLAND_INSELN_MALVINAS' | 'FIDSCHI' | 'FINNLAND' | 'FRANKREICH' | 'FRANZOESISCH_GUIANA' | 'FRENCH_POLYNESIA' | 'GABUN' | 'GAMBIA' | 'GEORGIEN' | 'GHANA' | 'GIBRALTAR' | 'GRENADA' | 'GRIECHENLAND' | 'GROENLAND' | 'GROSSBRITANNIEN' | 'GUADELOUPE' | 'GUAM' | 'GUATEMALA' | 'GUINEA_BISSAU' | 'GUINEA_REPUBLIK' | 'GUYANA' | 'HAITI' | 'HONDURAS' | 'HONGKONG' | 'INDIEN' | 'INDONIESIEN' | 'INSEL_MAN' | 'IRAK' | 'IRAN' | 'IRLAND' | 'ISLAND' | 'ISRAEL' | 'ITALIEN' | 'JAMAIKA' | 'JAPAN' | 'JEMEN' | 'JERSEY' | 'JORDANIEN' | 'JUGOSLAWIEN' | 'KAMERUN' | 'KANADA' | 'KAPVERDISCHE_INSELN' | 'KASACHSTAN' | 'KENIA' | 'KIRGISTAN' | 'KIRIBATI' | 'KLEINERE_AMERIK_UEBERSEEINSELN' | 'KOLUMBIEN' | 'KOMBODSCHA' | 'KOMOREN' | 'KONGO_DEMOKRATISCHE_REPUBLIK' | 'KONGO_REPUBLIK' | 'KOREA_REPUBLIK' | 'KOSOVO' | 'KROATIEN' | 'KUBA' | 'KUWAIT' | 'LAOS' | 'LESOTHO' | 'LETTLAND' | 'LIBANON' | 'LIBERIA' | 'LIBYEN' | 'LICHTENSTEIN' | 'LITAUEN' | 'LUXEMBURG' | 'MACAO' | 'MADAGASKAR' | 'MALAWI' | 'MALAYSIA' | 'MALEDIVEN' | 'MALI' | 'MALTA' | 'MAROKKO' | 'MARSHALLINSELN' | 'MARTINIQUE' | 'MAURETANIEN' | 'MAURITIUS' | 'MAYOTTE' | 'MAZEDONIEN' | 'MEXIKO' | 'MICRONESIA' | 'MOLDOVA' | 'MONACO' | 'MONGOLEI' | 'MONTENEGRO' | 'MONTSERRAT' | 'MOSAMBIK' | 'NAMIBIA' | 'NAURU' | 'NEPAL' | 'NEUSEELAND' | 'NEU_CALEDONIEN' | 'NICHT_ANGEGEB_AUSLAND' | 'NIEDERLAENDISCHE_ANTILLEN' | 'NIEDERLANDE' | 'NIGER' | 'NIGERIA' | 'NIKARAGUA' | 'NIUE' | 'NORFOLK_ISLAND' | 'NORWEGEN' | 'NOTHERN_MARIANA_ISLANDS' | 'OESTERREICH' | 'OMAN' | 'OST_TIMOR' | 'PAKISTAN' | 'PALAESTINA' | 'PALAU' | 'PANAMA' | 'PAPUA_NEUGUINEA' | 'PARAGUAY' | 'PERU' | 'PHILIPPINEN' | 'PITCAIM' | 'POLEN' | 'PORTUGAL' | 'PUERTO_RICO' | 'QATAR' | 'REUNION' | 'RUMAENIEN' | 'RUSSLAND' | 'RWANDA' | 'SAINT_BARTHELEMY' | 'SAINT_HELENA' | 'SAINT_MARTIN_FRANKREICH' | 'SAINT_PIERRE_AND_MIQUELON' | 'SALVADOR_EL' | 'SAMBIA' | 'SAMOA_WEST' | 'SANTA_LUCIA' | 'SAN_MARINO' | 'SAO_TOME' | 'SAUDIARABIEN' | 'SCHWEDEN' | 'SCHWEIZ' | 'SENEGAL' | 'SERBIEN' | 'SERBIEN_UND_MONTENEGRO' | 'SEYCHELLEN' | 'SIERRA_LEONE' | 'SINGAPUR' | 'SINT_MAARTEN_NIEDERLANDE' | 'SLOWAKISCHE_REPUBLIK' | 'SLOWENIEN' | 'SOLMON_ISLANDS' | 'SOMALIA' | 'SPANIEN' | 'SRI_LANKA' | 'STAATENLOS' | 'ST_KITTS_UND_NEVIS' | 'ST_VINCENT' | 'SUDAN' | 'SUEDAFRIKA' | 'SUEDKOREA' | 'SUEDSUDAN' | 'SURINAME' | 'SVALBARD_AND_JAN_MAYEN_ISLANDS' | 'SWASILAND' | 'SYRIEN' | 'TADSCHIKISTAN' | 'TANSANIA' | 'THAILAND' | 'TOGO' | 'TOKELAU' | 'TONGA' | 'TRINIDAD_UND_TOBAGO' | 'TSCHAD' | 'TSCHECHISCHE_REPUBLIK' | 'TUERKEI' | 'TUNESIEN' | 'TURKS_AND_CAICOS_ISLANDS' | 'TURMENISTAN' | 'TUVALU' | 'UGANDA' | 'UKRAINE' | 'UNGARN' | 'URUGUAY' | 'USA' | 'USBEKISTAN' | 'VANUATU' | 'VATIKAN' | 'VENEZUELA' | 'VEREINIGTE_ARABISCHE_EMIRATE' | 'VIETNAM' | 'VIRGIN_ISLANDS' | 'WALLIS_AND_FUTUNA_ISLANDS' | 'WEIHNACHTSINSEL' | 'WEST_SAHARA' | 'ZENTRALAFRIKA' | 'ZIMBABWE' | 'ZYPERN';
    export const LandEnum = {
        AEGYPTEN: 'AEGYPTEN' as LandEnum,
        AEQUATORIALGUINEA: 'AEQUATORIAL_GUINEA' as LandEnum,
        AETHIOPIEN: 'AETHIOPIEN' as LandEnum,
        AFGHANISTAN: 'AFGHANISTAN' as LandEnum,
        ALANDINSELN: 'ALANDINSELN' as LandEnum,
        ALBANIEN: 'ALBANIEN' as LandEnum,
        ALGERIEN: 'ALGERIEN' as LandEnum,
        AMERIKANISCHSAMOA: 'AMERIKANISCH_SAMOA' as LandEnum,
        ANDORRA: 'ANDORRA' as LandEnum,
        ANGOLA: 'ANGOLA' as LandEnum,
        ANGUILLA: 'ANGUILLA' as LandEnum,
        ANTARKTIS: 'ANTARKTIS' as LandEnum,
        ANTIGUAUNDBARBUDA: 'ANTIGUA_UND_BARBUDA' as LandEnum,
        ARGENTINIEN: 'ARGENTINIEN' as LandEnum,
        ARMENIEN: 'ARMENIEN' as LandEnum,
        ARUBA: 'ARUBA' as LandEnum,
        ASERBAIDSCHAN: 'ASERBAIDSCHAN' as LandEnum,
        AUSTRALIEN: 'AUSTRALIEN' as LandEnum,
        BAHAMAS: 'BAHAMAS' as LandEnum,
        BAHRAIN: 'BAHRAIN' as LandEnum,
        BANLADESH: 'BANLADESH' as LandEnum,
        BARBADOS: 'BARBADOS' as LandEnum,
        BELARUS: 'BELARUS' as LandEnum,
        BELGIEN: 'BELGIEN' as LandEnum,
        BELIZE: 'BELIZE' as LandEnum,
        BENIN: 'BENIN' as LandEnum,
        BERMUDA: 'BERMUDA' as LandEnum,
        BHUTAN: 'BHUTAN' as LandEnum,
        BOLIVIEN: 'BOLIVIEN' as LandEnum,
        BOSNIENHERZEGOWINA: 'BOSNIEN_HERZEGOWINA' as LandEnum,
        BOTSWANA: 'BOTSWANA' as LandEnum,
        BRASILIEN: 'BRASILIEN' as LandEnum,
        BRITISHVIRGINISLANDS: 'BRITISH_VIRGIN_ISLANDS' as LandEnum,
        BRITSICHINDISCHEROZEAN: 'BRITSICH_INDISCHER_OZEAN' as LandEnum,
        BRUNEI: 'BRUNEI' as LandEnum,
        BULGARIEN: 'BULGARIEN' as LandEnum,
        BURKINAFASO: 'BURKINA_FASO' as LandEnum,
        BURMAMYANMAR: 'BURMA_MYANMAR' as LandEnum,
        BURUNDI: 'BURUNDI' as LandEnum,
        CAYMANISLANDS: 'CAYMAN_ISLANDS' as LandEnum,
        CHILE: 'CHILE' as LandEnum,
        CHINATAIWAN: 'CHINA_TAIWAN' as LandEnum,
        CHINAVOLKSREPUBLIK: 'CHINA_VOLKSREPUBLIK' as LandEnum,
        COOKISLANDS: 'COOK_ISLANDS' as LandEnum,
        COSTARICA: 'COSTA_RICA' as LandEnum,
        COTEDIVOIRE: 'COTE_D_IVOIRE' as LandEnum,
        CURACAO: 'CURACAO' as LandEnum,
        DAENEMARK: 'DAENEMARK' as LandEnum,
        DEUTSCHLAND: 'DEUTSCHLAND' as LandEnum,
        DJIBOUTI: 'DJIBOUTI' as LandEnum,
        DOMINICA: 'DOMINICA' as LandEnum,
        DOMINIKANISCHEREPUBLIK: 'DOMINIKANISCHE_REPUBLIK' as LandEnum,
        EKUADOR: 'EKUADOR' as LandEnum,
        ERITREA: 'ERITREA' as LandEnum,
        ESTLAND: 'ESTLAND' as LandEnum,
        FAEROEERINSELN: 'FAEROEER_INSELN' as LandEnum,
        FALKLANDINSELNMALVINAS: 'FALKLAND_INSELN_MALVINAS' as LandEnum,
        FIDSCHI: 'FIDSCHI' as LandEnum,
        FINNLAND: 'FINNLAND' as LandEnum,
        FRANKREICH: 'FRANKREICH' as LandEnum,
        FRANZOESISCHGUIANA: 'FRANZOESISCH_GUIANA' as LandEnum,
        FRENCHPOLYNESIA: 'FRENCH_POLYNESIA' as LandEnum,
        GABUN: 'GABUN' as LandEnum,
        GAMBIA: 'GAMBIA' as LandEnum,
        GEORGIEN: 'GEORGIEN' as LandEnum,
        GHANA: 'GHANA' as LandEnum,
        GIBRALTAR: 'GIBRALTAR' as LandEnum,
        GRENADA: 'GRENADA' as LandEnum,
        GRIECHENLAND: 'GRIECHENLAND' as LandEnum,
        GROENLAND: 'GROENLAND' as LandEnum,
        GROSSBRITANNIEN: 'GROSSBRITANNIEN' as LandEnum,
        GUADELOUPE: 'GUADELOUPE' as LandEnum,
        GUAM: 'GUAM' as LandEnum,
        GUATEMALA: 'GUATEMALA' as LandEnum,
        GUINEABISSAU: 'GUINEA_BISSAU' as LandEnum,
        GUINEAREPUBLIK: 'GUINEA_REPUBLIK' as LandEnum,
        GUYANA: 'GUYANA' as LandEnum,
        HAITI: 'HAITI' as LandEnum,
        HONDURAS: 'HONDURAS' as LandEnum,
        HONGKONG: 'HONGKONG' as LandEnum,
        INDIEN: 'INDIEN' as LandEnum,
        INDONIESIEN: 'INDONIESIEN' as LandEnum,
        INSELMAN: 'INSEL_MAN' as LandEnum,
        IRAK: 'IRAK' as LandEnum,
        IRAN: 'IRAN' as LandEnum,
        IRLAND: 'IRLAND' as LandEnum,
        ISLAND: 'ISLAND' as LandEnum,
        ISRAEL: 'ISRAEL' as LandEnum,
        ITALIEN: 'ITALIEN' as LandEnum,
        JAMAIKA: 'JAMAIKA' as LandEnum,
        JAPAN: 'JAPAN' as LandEnum,
        JEMEN: 'JEMEN' as LandEnum,
        JERSEY: 'JERSEY' as LandEnum,
        JORDANIEN: 'JORDANIEN' as LandEnum,
        JUGOSLAWIEN: 'JUGOSLAWIEN' as LandEnum,
        KAMERUN: 'KAMERUN' as LandEnum,
        KANADA: 'KANADA' as LandEnum,
        KAPVERDISCHEINSELN: 'KAPVERDISCHE_INSELN' as LandEnum,
        KASACHSTAN: 'KASACHSTAN' as LandEnum,
        KENIA: 'KENIA' as LandEnum,
        KIRGISTAN: 'KIRGISTAN' as LandEnum,
        KIRIBATI: 'KIRIBATI' as LandEnum,
        KLEINEREAMERIKUEBERSEEINSELN: 'KLEINERE_AMERIK_UEBERSEEINSELN' as LandEnum,
        KOLUMBIEN: 'KOLUMBIEN' as LandEnum,
        KOMBODSCHA: 'KOMBODSCHA' as LandEnum,
        KOMOREN: 'KOMOREN' as LandEnum,
        KONGODEMOKRATISCHEREPUBLIK: 'KONGO_DEMOKRATISCHE_REPUBLIK' as LandEnum,
        KONGOREPUBLIK: 'KONGO_REPUBLIK' as LandEnum,
        KOREAREPUBLIK: 'KOREA_REPUBLIK' as LandEnum,
        KOSOVO: 'KOSOVO' as LandEnum,
        KROATIEN: 'KROATIEN' as LandEnum,
        KUBA: 'KUBA' as LandEnum,
        KUWAIT: 'KUWAIT' as LandEnum,
        LAOS: 'LAOS' as LandEnum,
        LESOTHO: 'LESOTHO' as LandEnum,
        LETTLAND: 'LETTLAND' as LandEnum,
        LIBANON: 'LIBANON' as LandEnum,
        LIBERIA: 'LIBERIA' as LandEnum,
        LIBYEN: 'LIBYEN' as LandEnum,
        LICHTENSTEIN: 'LICHTENSTEIN' as LandEnum,
        LITAUEN: 'LITAUEN' as LandEnum,
        LUXEMBURG: 'LUXEMBURG' as LandEnum,
        MACAO: 'MACAO' as LandEnum,
        MADAGASKAR: 'MADAGASKAR' as LandEnum,
        MALAWI: 'MALAWI' as LandEnum,
        MALAYSIA: 'MALAYSIA' as LandEnum,
        MALEDIVEN: 'MALEDIVEN' as LandEnum,
        MALI: 'MALI' as LandEnum,
        MALTA: 'MALTA' as LandEnum,
        MAROKKO: 'MAROKKO' as LandEnum,
        MARSHALLINSELN: 'MARSHALLINSELN' as LandEnum,
        MARTINIQUE: 'MARTINIQUE' as LandEnum,
        MAURETANIEN: 'MAURETANIEN' as LandEnum,
        MAURITIUS: 'MAURITIUS' as LandEnum,
        MAYOTTE: 'MAYOTTE' as LandEnum,
        MAZEDONIEN: 'MAZEDONIEN' as LandEnum,
        MEXIKO: 'MEXIKO' as LandEnum,
        MICRONESIA: 'MICRONESIA' as LandEnum,
        MOLDOVA: 'MOLDOVA' as LandEnum,
        MONACO: 'MONACO' as LandEnum,
        MONGOLEI: 'MONGOLEI' as LandEnum,
        MONTENEGRO: 'MONTENEGRO' as LandEnum,
        MONTSERRAT: 'MONTSERRAT' as LandEnum,
        MOSAMBIK: 'MOSAMBIK' as LandEnum,
        NAMIBIA: 'NAMIBIA' as LandEnum,
        NAURU: 'NAURU' as LandEnum,
        NEPAL: 'NEPAL' as LandEnum,
        NEUSEELAND: 'NEUSEELAND' as LandEnum,
        NEUCALEDONIEN: 'NEU_CALEDONIEN' as LandEnum,
        NICHTANGEGEBAUSLAND: 'NICHT_ANGEGEB_AUSLAND' as LandEnum,
        NIEDERLAENDISCHEANTILLEN: 'NIEDERLAENDISCHE_ANTILLEN' as LandEnum,
        NIEDERLANDE: 'NIEDERLANDE' as LandEnum,
        NIGER: 'NIGER' as LandEnum,
        NIGERIA: 'NIGERIA' as LandEnum,
        NIKARAGUA: 'NIKARAGUA' as LandEnum,
        NIUE: 'NIUE' as LandEnum,
        NORFOLKISLAND: 'NORFOLK_ISLAND' as LandEnum,
        NORWEGEN: 'NORWEGEN' as LandEnum,
        NOTHERNMARIANAISLANDS: 'NOTHERN_MARIANA_ISLANDS' as LandEnum,
        OESTERREICH: 'OESTERREICH' as LandEnum,
        OMAN: 'OMAN' as LandEnum,
        OSTTIMOR: 'OST_TIMOR' as LandEnum,
        PAKISTAN: 'PAKISTAN' as LandEnum,
        PALAESTINA: 'PALAESTINA' as LandEnum,
        PALAU: 'PALAU' as LandEnum,
        PANAMA: 'PANAMA' as LandEnum,
        PAPUANEUGUINEA: 'PAPUA_NEUGUINEA' as LandEnum,
        PARAGUAY: 'PARAGUAY' as LandEnum,
        PERU: 'PERU' as LandEnum,
        PHILIPPINEN: 'PHILIPPINEN' as LandEnum,
        PITCAIM: 'PITCAIM' as LandEnum,
        POLEN: 'POLEN' as LandEnum,
        PORTUGAL: 'PORTUGAL' as LandEnum,
        PUERTORICO: 'PUERTO_RICO' as LandEnum,
        QATAR: 'QATAR' as LandEnum,
        REUNION: 'REUNION' as LandEnum,
        RUMAENIEN: 'RUMAENIEN' as LandEnum,
        RUSSLAND: 'RUSSLAND' as LandEnum,
        RWANDA: 'RWANDA' as LandEnum,
        SAINTBARTHELEMY: 'SAINT_BARTHELEMY' as LandEnum,
        SAINTHELENA: 'SAINT_HELENA' as LandEnum,
        SAINTMARTINFRANKREICH: 'SAINT_MARTIN_FRANKREICH' as LandEnum,
        SAINTPIERREANDMIQUELON: 'SAINT_PIERRE_AND_MIQUELON' as LandEnum,
        SALVADOREL: 'SALVADOR_EL' as LandEnum,
        SAMBIA: 'SAMBIA' as LandEnum,
        SAMOAWEST: 'SAMOA_WEST' as LandEnum,
        SANTALUCIA: 'SANTA_LUCIA' as LandEnum,
        SANMARINO: 'SAN_MARINO' as LandEnum,
        SAOTOME: 'SAO_TOME' as LandEnum,
        SAUDIARABIEN: 'SAUDIARABIEN' as LandEnum,
        SCHWEDEN: 'SCHWEDEN' as LandEnum,
        SCHWEIZ: 'SCHWEIZ' as LandEnum,
        SENEGAL: 'SENEGAL' as LandEnum,
        SERBIEN: 'SERBIEN' as LandEnum,
        SERBIENUNDMONTENEGRO: 'SERBIEN_UND_MONTENEGRO' as LandEnum,
        SEYCHELLEN: 'SEYCHELLEN' as LandEnum,
        SIERRALEONE: 'SIERRA_LEONE' as LandEnum,
        SINGAPUR: 'SINGAPUR' as LandEnum,
        SINTMAARTENNIEDERLANDE: 'SINT_MAARTEN_NIEDERLANDE' as LandEnum,
        SLOWAKISCHEREPUBLIK: 'SLOWAKISCHE_REPUBLIK' as LandEnum,
        SLOWENIEN: 'SLOWENIEN' as LandEnum,
        SOLMONISLANDS: 'SOLMON_ISLANDS' as LandEnum,
        SOMALIA: 'SOMALIA' as LandEnum,
        SPANIEN: 'SPANIEN' as LandEnum,
        SRILANKA: 'SRI_LANKA' as LandEnum,
        STAATENLOS: 'STAATENLOS' as LandEnum,
        STKITTSUNDNEVIS: 'ST_KITTS_UND_NEVIS' as LandEnum,
        STVINCENT: 'ST_VINCENT' as LandEnum,
        SUDAN: 'SUDAN' as LandEnum,
        SUEDAFRIKA: 'SUEDAFRIKA' as LandEnum,
        SUEDKOREA: 'SUEDKOREA' as LandEnum,
        SUEDSUDAN: 'SUEDSUDAN' as LandEnum,
        SURINAME: 'SURINAME' as LandEnum,
        SVALBARDANDJANMAYENISLANDS: 'SVALBARD_AND_JAN_MAYEN_ISLANDS' as LandEnum,
        SWASILAND: 'SWASILAND' as LandEnum,
        SYRIEN: 'SYRIEN' as LandEnum,
        TADSCHIKISTAN: 'TADSCHIKISTAN' as LandEnum,
        TANSANIA: 'TANSANIA' as LandEnum,
        THAILAND: 'THAILAND' as LandEnum,
        TOGO: 'TOGO' as LandEnum,
        TOKELAU: 'TOKELAU' as LandEnum,
        TONGA: 'TONGA' as LandEnum,
        TRINIDADUNDTOBAGO: 'TRINIDAD_UND_TOBAGO' as LandEnum,
        TSCHAD: 'TSCHAD' as LandEnum,
        TSCHECHISCHEREPUBLIK: 'TSCHECHISCHE_REPUBLIK' as LandEnum,
        TUERKEI: 'TUERKEI' as LandEnum,
        TUNESIEN: 'TUNESIEN' as LandEnum,
        TURKSANDCAICOSISLANDS: 'TURKS_AND_CAICOS_ISLANDS' as LandEnum,
        TURMENISTAN: 'TURMENISTAN' as LandEnum,
        TUVALU: 'TUVALU' as LandEnum,
        UGANDA: 'UGANDA' as LandEnum,
        UKRAINE: 'UKRAINE' as LandEnum,
        UNGARN: 'UNGARN' as LandEnum,
        URUGUAY: 'URUGUAY' as LandEnum,
        USA: 'USA' as LandEnum,
        USBEKISTAN: 'USBEKISTAN' as LandEnum,
        VANUATU: 'VANUATU' as LandEnum,
        VATIKAN: 'VATIKAN' as LandEnum,
        VENEZUELA: 'VENEZUELA' as LandEnum,
        VEREINIGTEARABISCHEEMIRATE: 'VEREINIGTE_ARABISCHE_EMIRATE' as LandEnum,
        VIETNAM: 'VIETNAM' as LandEnum,
        VIRGINISLANDS: 'VIRGIN_ISLANDS' as LandEnum,
        WALLISANDFUTUNAISLANDS: 'WALLIS_AND_FUTUNA_ISLANDS' as LandEnum,
        WEIHNACHTSINSEL: 'WEIHNACHTSINSEL' as LandEnum,
        WESTSAHARA: 'WEST_SAHARA' as LandEnum,
        ZENTRALAFRIKA: 'ZENTRALAFRIKA' as LandEnum,
        ZIMBABWE: 'ZIMBABWE' as LandEnum,
        ZYPERN: 'ZYPERN' as LandEnum
    };
}


