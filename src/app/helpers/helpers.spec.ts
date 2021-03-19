import { addDays, addYears } from 'date-fns';
import {
  convertFrvPoliciesToComplementaryPolicies,
  convertPersonToCookieUserInfo,
  convertPoliciesToBasisInsurancePolicy,
  convertPostAddressArray2AddressArray,
  convertShvPoliciesToComplementaryPolicies,
  convertSpvPoliciesToComplementaryPolicies,
  findActiveBasisInsurancePolicies,
  findActiveComplementaryPolicies,
  findProductIdForProductNameLabel, formatDate,
  getCarrier,
  getClosestElement,
  getGender,
  getKvg,
  getOnrp,
  getPostalCode,
  getProductNameLabelFromActivePolicies,
  getTownNr,
  getVvg, serverDateFormat, userDateFormat
} from './helpers';
import { AuthorizedPerson } from './model/authorizedPerson';
import { FrvPolicy } from './model/frvPolicy';
import { PolicePraemienzahler } from './model/policePraemienzahler';
import { PoliceProdukt } from './model/policeProdukt';
import { Policy } from './model/policy';
import { PostAdresse } from './model/postAdresse';
import { ShvPolicy } from './model/shvPolicy';
import { SpvPolicy } from './model/spvPolicy';
import {
  Address,
  BasisInsurancePolicy,
  ComplementaryPolicy,
  PolicePremiumPayer,
  PolicyProduct, TextConfigTranslations,
  TrackingCookieUserInfo
} from './model/tracking/model';
import { Versichertenkarte } from './model/versichertenkarte';
import 'jest-extended';

describe('Tracking Helpers', () => {

  const kvg = 'KVG';
  const vvg = 'VVG';
  const kvgLabel = 'Grundversicherung';
  const standardLabel = 'Standardversicherung';
  const spitalLabel = 'Spitalversicherung';
  const zahnLabel = 'Zanhpflegeversicherung';
  const arcosana = 'ARCOSANA';
  const css = 'CSS';
  const today = new Date();
  const yesterday = addDays(today, -1);
  const tomorrow = addDays(today, 1);
  const future = addYears(today, 100);
  const kvgPolicyProduct: PolicyProduct = {
    law: kvg,
    productNameLabel: kvgLabel
  };
  const standardPolicyProduct: PolicyProduct = {
    law: vvg,
    productNameLabel: standardLabel
  };
  const spitalPolicyProduct: PolicyProduct = {
    law: vvg,
    productNameLabel: spitalLabel
  };
  const zahnPolicyProduct: PolicyProduct = {
    law: vvg,
    productNameLabel: zahnLabel
  };

  describe('getClosestElement', () => {
    it('should return closest element if attribute is present', () => {
      const attribute = 'customAttribute';
      const parent: HTMLElement = document.createElement('p');
      parent.setAttribute(attribute, 'value');
      const element: Partial<Element> = {
        attributes: {} as NamedNodeMap,
        parentElement: parent as HTMLElement
      };
      const result: Element = getClosestElement(element as Element, attribute);

      expect(result).toEqual(parent);
    });

    it('should return null if no parent with attribute', () => {
      const attribute = 'customAttribute';
      const parent: HTMLElement = document.createElement('p');
      const element: Partial<Element> = {
        attributes: {} as NamedNodeMap,
        parentElement: parent as HTMLElement
      };
      const result: Element = getClosestElement(element as Element, attribute);

      expect(result).toEqual(null);
    });
  });

  describe('convertPersonToCookieUserInfo', () => {
    it('should convert AuthorizedPerson to CookieUserInfo', () => {
      const geburtsDatum = '2000-01-01';
      const geschlecht = 'MAENNLICH';
      const street = 'street';
      const streetNumber = 'streetNumber';
      const zip = 'zip';
      const city = 'city';
      const townNr = 'townNr';
      const person: Partial<AuthorizedPerson> = {
        geburtsdatum: geburtsDatum,
        geschlecht
      };
      const address: Partial<Address> = {
        street,
        streetNumber,
        zip,
        city,
        townNr
      };

      const result: TrackingCookieUserInfo = convertPersonToCookieUserInfo(person as AuthorizedPerson, address as Address);

      expect(result.dateOfBirth).toEqual(formatDate(new Date(geburtsDatum), userDateFormat));
      expect(result.gender).toEqual('m');
      expect(result.postalCode).toEqual(`${zip} ${city}`);
      // tslint:disable-next-line:radix
      expect(result.onrp).toEqual(Number.parseInt(streetNumber));
      expect(result.townNr).toEqual(townNr);
    });

    it('should create empty UserInfo when source is undefined', () => {
      const person: Partial<AuthorizedPerson> = {
        geburtsdatum: undefined,
        geschlecht: undefined
      };

      const result: TrackingCookieUserInfo = convertPersonToCookieUserInfo(person as AuthorizedPerson, undefined);

      expect(result.dateOfBirth).toEqual('');
      expect(result.gender).toEqual('');
      expect(result.postalCode).toEqual('');
      expect(result.onrp).toEqual(0);
      expect(result.townNr).toEqual('');
    });
  });

  describe('convertPostAddressArray2AddressArray', () => {
    it('should convert PostAddress to Address', () => {
      const strasse = 'street';
      const hausnummer = 'streetNumber';
      const postleitzahl = 'zip';
      const ort = 'city';
      const gemeindeNummer = 'townNr';
      const address: Partial<PostAdresse> = {
        ort,
        strasse,
        hausnummer,
        postleitzahl,
        gemeindeNummer
      };
      const result: Address[] = convertPostAddressArray2AddressArray([address as PostAdresse]);

      expect(result.length).toBe(1);
      expect(result[0].city).toEqual(ort);
      expect(result[0].street).toEqual(strasse);
      expect(result[0].streetNumber).toEqual(hausnummer);
      expect(result[0].zip).toEqual(postleitzahl);
      expect(result[0].townNr).toEqual(gemeindeNummer);
    });
  });

  describe('convertPoliciesToBasisInsurancePolicy', () => {
    it('should convert Policies to BasisInsurancePolicies', () => {
      const kvgProduct: Partial<PoliceProdukt> = {
        gesetz: kvg,
        produktNameLabel: kvgLabel
      };
      const standardProduct: Partial<PoliceProdukt> = {
        gesetz: vvg,
        produktNameLabel: standardLabel
      };
      const spitalProduct: Partial<PoliceProdukt> = {
        gesetz: vvg,
        produktNameLabel: spitalLabel
      };
      const zahnProduct: Partial<PoliceProdukt> = {
        gesetz: vvg,
        produktNameLabel: zahnLabel
      };
      const validPraemienZahler: Partial<PolicePraemienzahler> = {
        policeProdukt: [
          kvgProduct as PoliceProdukt,
          standardProduct as PoliceProdukt,
          spitalProduct as PoliceProdukt,
          zahnProduct as PoliceProdukt
        ]
      };
      const testPolicy = {
        validFrom: formatDate(yesterday, serverDateFormat),
        validTo: formatDate(tomorrow, serverDateFormat),
        anbieter: arcosana,
        policePraemienzahler: [validPraemienZahler as PolicePraemienzahler]
      };

      const result: BasisInsurancePolicy[] = convertPoliciesToBasisInsurancePolicy([testPolicy as Policy]);

      expect(result.length).toBe(1);
      expect(result[0].carrier).toEqual(arcosana);
      expect(result[0].validFrom.getDate()).toEqual(yesterday.getDate());
      expect(result[0].validTo.getDate()).toEqual(tomorrow.getDate());
      expect(result[0].policePremiumPayers.length).toBe(1);
      expect(result[0].policePremiumPayers[0].policyProducts.length).toBe(4);
      expect(result[0].policePremiumPayers[0].policyProducts
        .find((pp) => pp.law === kvg).productNameLabel).toEqual(kvgLabel);
      expect(result[0].policePremiumPayers[0].policyProducts
        .filter((pp) => pp.law !== kvg)
        .map((pp) => pp.productNameLabel))
        .toIncludeSameMembers([
          standardLabel,
          spitalLabel,
          zahnLabel
        ]);
    });

    it('should convert Policies with empty Praemienzahler to BasisInsurancePolicies', () => {
      const testPolicy: Partial<Policy> = {
        policePraemienzahler: []
      };

      const result: BasisInsurancePolicy[] = convertPoliciesToBasisInsurancePolicy([testPolicy as Policy]);

      expect(result.length).toBe(1);
      expect(result[0].policePremiumPayers.length).toBe(0);
    });

    it('should convert Policies with empty PoliceProdukt to BasisInsurancePolicies', () => {
      const praemienzahlerWithEmptyPoliceProdukt: Partial<PolicePraemienzahler> = {
        policeProdukt: []
      };
      const testPolicy: Partial<Policy> = {
        policePraemienzahler: [praemienzahlerWithEmptyPoliceProdukt as PolicePraemienzahler]
      };

      const result: BasisInsurancePolicy[] = convertPoliciesToBasisInsurancePolicy([testPolicy as Policy]);

      expect(result.length).toBe(1);
      expect(result[0].policePremiumPayers.length).toBe(1);
      expect(result[0].policePremiumPayers[0].policyProducts.length).toBe(0);
    });
  });

  describe('convertFrvPoliciesToComplementaryPolicies', () => {
    it('should convert FrvPolicies to ComplementaryPolicies', () => {
      const frvPolicyA: Partial<FrvPolicy> = {
        vertragsende: formatDate(today, serverDateFormat)
      };
      const frvPolicyB: Partial<FrvPolicy> = {
        vertragsende: formatDate(yesterday, serverDateFormat)
      };

      const result: ComplementaryPolicy[] = convertFrvPoliciesToComplementaryPolicies([
        frvPolicyA as FrvPolicy,
        frvPolicyB as FrvPolicy
      ]);

      expect(result.length).toBe(2);
      expect(result
        .map((cp) => cp.contractExpiryDate.getDate()))
        .toIncludeSameMembers([today.getDate(), yesterday.getDate()]);
    });
  });

  describe('convertShvPoliciesToComplementaryPolicies', () => {
    it('should convert ShvPolicies to ComplementaryPolicies', () => {
      const shvPolicyA: Partial<ShvPolicy> = {
        vertragsende: formatDate(today, serverDateFormat)
      };
      const shvPolicyB: Partial<ShvPolicy> = {
        vertragsende: formatDate(yesterday, serverDateFormat)
      };

      const result: ComplementaryPolicy[] = convertShvPoliciesToComplementaryPolicies([
        shvPolicyA as ShvPolicy,
        shvPolicyB as ShvPolicy
      ]);

      expect(result.length).toBe(2);
      expect(result
        .map((cp) => cp.contractExpiryDate.getDate()))
        .toIncludeSameMembers([today.getDate(), yesterday.getDate()]);
    });
  });

  describe('convertSpvPoliciesToComplementaryPolicies', () => {
    it('should convert SpvPolicies to ComplementaryPolicies', () => {
      const spvPolicyA: Partial<SpvPolicy> = {
        vertragsende: formatDate(today, serverDateFormat)
      };
      const spvPolicyB: Partial<SpvPolicy> = {
        vertragsende: formatDate(yesterday, serverDateFormat)
      };

      const result: ComplementaryPolicy[] = convertSpvPoliciesToComplementaryPolicies([
        spvPolicyA as SpvPolicy,
        spvPolicyB as SpvPolicy
      ]);

      expect(result.length).toBe(2);
      expect(result
        .map((cp) => cp.contractExpiryDate.getDate()))
        .toIncludeSameMembers([today.getDate(), yesterday.getDate()]);
    });
  });

  describe('findActiveBasisInsurancePolicies', () => {
    it('should find active Policies', () => {
      const expiredPolicy: Partial<BasisInsurancePolicy> = {
        validFrom: yesterday,
        validTo: yesterday
      };
      const futurePolicy: Partial<BasisInsurancePolicy> = {
        validFrom: tomorrow,
        validTo: future
      };
      const activePolicyA: Partial<BasisInsurancePolicy> = {
        validFrom: yesterday,
        validTo: tomorrow
      };
      const activePolicyB: Partial<BasisInsurancePolicy> = {
        validFrom: yesterday,
        validTo: tomorrow
      };

      const result: BasisInsurancePolicy[] = findActiveBasisInsurancePolicies([
        expiredPolicy as BasisInsurancePolicy,
        futurePolicy as BasisInsurancePolicy,
        activePolicyA as BasisInsurancePolicy,
        activePolicyB as BasisInsurancePolicy
      ], today);

      expect(result.length).toBe(2);
    });
  });

  describe('findActiveComplementaryPolicies', () => {
    it('should find active complementary policies', () => {
      const expiredPolicy: ComplementaryPolicy = {
        contractExpiryDate: yesterday
      };
      const activePolicyA: ComplementaryPolicy = {
        contractExpiryDate: today
      };
      const activePolicyB: ComplementaryPolicy = {
        contractExpiryDate: tomorrow
      };
      const activePolicyC: ComplementaryPolicy = {
        contractExpiryDate: future
      };

      const result: ComplementaryPolicy[] = findActiveComplementaryPolicies([
        expiredPolicy,
        activePolicyA,
        activePolicyB,
        activePolicyC
      ], today);

      expect(result.length).toBe(3);
    });
  });

  describe('getCarrier', () => {
    it('should return all the carriers separated by a comma', () => {
      const cssPolicy: Partial<BasisInsurancePolicy> = {
        carrier: css
      };
      const arcosanaPolicy: Partial<BasisInsurancePolicy> = {
        carrier: arcosana
      };

      const result: string = getCarrier([
        cssPolicy as BasisInsurancePolicy,
        arcosanaPolicy as BasisInsurancePolicy
      ]);

      expect(result).toEqual(`${css}, ${arcosana}`);
    });
  });

  describe('findProductIdForProductNameLabel', () => {
    it('should return product key for matching product label', () => {
      const matchingKey = 'matchingKey';
      const matchingLabel = 'label with MATCHING part';
      const translations: TextConfigTranslations = createTestTextConfigTranslations('MATCHING');

      const result: string = findProductIdForProductNameLabel(matchingLabel, 'fr', translations);

      expect(result).toEqual(matchingKey);
    });

    it('should return error message when language is not supported', () => {
      const label = 'label with MATCHING part';
      const translations: TextConfigTranslations = createTestTextConfigTranslations('MATCHING');

      const result: string = findProductIdForProductNameLabel(label, 'unsupported', translations);

      expect(result).toEqual(label);
    });

    it('should return label when label does not include product name', () => {
      const label = 'label with no MATCHING part';
      const translations: TextConfigTranslations = createTestTextConfigTranslations('NOT_MATCHING');

      const result: string = findProductIdForProductNameLabel(label, 'fr', translations);

      expect(result).toEqual(label);
    });

    it('should return error message when product is not available', () => {
      const label = 'matchingLabel';
      const translations: TextConfigTranslations = {
        fr: {
          textconfig: {
            produkte: {
              product: undefined
            }
          }
        }
      };

      const result: string = findProductIdForProductNameLabel(label, 'fr', translations);

      expect(result).toEqual(label);
    });

    it('should return error message when there is no matching label', () => {
      const label = 'label';
      const differentLabel = 'differentLabel';
      const translations = createTestTextConfigTranslations(differentLabel);

      const result: string = findProductIdForProductNameLabel(label, 'fr', translations);

      expect(result).toEqual(label);
    });
  });

  describe('getProductNameLabelFromActivePolicies', () => {
    it('should return kvg labels', () => {
      const result: string[] = getProductNameLabelFromActivePolicies(createBasisInsurancePolicies(), kvg);

      expect(result.length).toBe(3);
      expect(result).toIncludeSameMembers([kvgLabel, kvgLabel, kvgLabel]);
    });

    it('should return vvg labels', () => {
      const result: string[] = getProductNameLabelFromActivePolicies(createBasisInsurancePolicies(), vvg);

      expect(result.length).toBe(3);
      expect(result).toIncludeSameMembers([standardLabel, spitalLabel, zahnLabel]);
    });

    it('should return all vvg labels also when a product has multiple vvg', () => {
      const testPolicies: BasisInsurancePolicy[] = createBasisInsurancePolicies();
      const policePremiumPayerWithMultipleVVGs: PolicePremiumPayer = {
        policyProducts: [
          kvgPolicyProduct,
          spitalPolicyProduct,
          zahnPolicyProduct,
          standardPolicyProduct
        ]
      };
      testPolicies.push({
        validFrom: yesterday,
        validTo: yesterday,
        carrier: arcosana,
        policePremiumPayers: [policePremiumPayerWithMultipleVVGs]
      });
      const result: string[] = getProductNameLabelFromActivePolicies(testPolicies, vvg);

      expect(result.length).toBe(6);
      expect(result).toIncludeSameMembers([
        standardLabel,
        spitalLabel,
        zahnLabel,
        standardLabel,
        spitalLabel,
        zahnLabel
      ]);
    });
  });

  describe('getKvg', () => {
    it('should return the okpModell when versichertenkarte is available', () => {
      const okpModell = 'MULTIMED';
      const versichertenkarte: Partial<Versichertenkarte> = {
        okpModell
      };
      const result: string = getKvg(
        [],
        undefined,
        versichertenkarte as Versichertenkarte);

      expect(result).toEqual(okpModell.toLowerCase());
    });

    it('should return - nein - as kvg value when everything is undefined', () => {
      const result: string = getKvg(
        [],
        undefined,
        undefined);

      expect(result).toEqual('nein');
    });

    it('should return - nein - as kvg value when versichertenKarte.okpModell is null', () => {
      const versichertenkarte: Partial<Versichertenkarte> = {
        okpModell: null
      };
      const result: string = getKvg(
        [],
        undefined,
        versichertenkarte as Versichertenkarte);

      expect(result).toEqual('nein');
    });
  });

  describe('getVvg', () => {
    it('should return -nein- when everything is undefined', () => {
      const result: string = getVvg(
        [],
        undefined);

      expect(result).toEqual('nein');
    });
  });

  describe('getGender', () => {
    it('should return empty string when no geschlecht in authorizedPerson', () => {
      const input = {};

      const result = getGender(input as AuthorizedPerson);

      expect(result).toBe('');
    });

    it('should return empty string when not male or female geschlecht in authorizedPerson', () => {
      const input = {geschlecht: 'UNKNOWN'};

      const result = getGender(input as AuthorizedPerson);

      expect(result).toBe('');
    });

    it('should return m for male', () => {
      const input = {geschlecht: AuthorizedPerson.GeschlechtEnum.MAENNLICH};

      const result = getGender(input as AuthorizedPerson);

      expect(result).toBe('m');
    });

    it('should return f for female', () => {
      const input = {geschlecht: AuthorizedPerson.GeschlechtEnum.WEIBLICH};

      const result = getGender(input as AuthorizedPerson);

      expect(result).toBe('f');
    });
  });

  describe('getTownNr', () => {
    it('should return empty string when no address given', () => {
      const input = undefined;

      const result = getTownNr(input as Address);

      expect(result).toBe('');
    });

    it('should return empty string when townNr of address is undefined', () => {
      const input = {};

      const result = getTownNr(input as Address);

      expect(result).toBe('');
    });

    it('should return townNr', () => {
      const input = {townNr: '12345678'};

      const result = getTownNr(input as Address);

      expect(result).toBe('12345678');
    });
  });

  describe('getPostalCode', () => {
    it('should return empty string when no address given', () => {
      const input = undefined;

      const result = getPostalCode(input as Address);

      expect(result).toBe('');
    });

    it('should return zip and city', () => {
      const input = {zip: '12345678', city: 'Hoi'};

      const result = getPostalCode(input as Address);

      expect(result).toBe('12345678 Hoi');
    });
  });

  describe('getOnrp', () => {
    it('should return empty string when no address given', () => {
      const input = undefined;

      const result = getOnrp(input as Address);

      expect(result).toBe(0);
    });

    it('should return zip and city', () => {
      const input = {streetNumber: 12345678};

      const result = getOnrp(input as any);

      expect(result).toBe(12345678);
    });
  });

  function createTestTextConfigTranslations(matchingLabel?: string): TextConfigTranslations {
    const dummyDescription = 'dummyDesc';
    return {
      de: {
        textconfig: {
          produkte: {
            product: {
              kvgKey: {
                description: dummyDescription,
                label: kvgLabel
              },
              key2: {
                description: dummyDescription,
                label: zahnLabel
              },
              matchingKey: {
                description: dummyDescription,
                label: matchingLabel
              }
            }
          }
        }
      },
      fr: {
        textconfig: {
          produkte: {
            product: {
              kvgKey: {
                description: dummyDescription,
                label: kvgLabel
              },
              key2: {
                description: dummyDescription,
                label: zahnLabel
              },
              matchingKey: {
                description: dummyDescription,
                label: matchingLabel
              }
            }
          }
        }
      }
    };
  }

  function createBasisInsurancePolicies(): BasisInsurancePolicy[] {
    const policePremiumPayerA: PolicePremiumPayer = {
      policyProducts: [
        kvgPolicyProduct,
        standardPolicyProduct
      ]
    };
    const policePremiumPayerB: PolicePremiumPayer = {
      policyProducts: [
        kvgPolicyProduct,
        spitalPolicyProduct
      ]
    };
    const policePremiumPayerC: PolicePremiumPayer = {
      policyProducts: [
        kvgPolicyProduct,
        zahnPolicyProduct
      ]
    };
    const policyWithoutPremiumPayer: BasisInsurancePolicy = {
      validFrom: yesterday,
      validTo: yesterday,
      carrier: arcosana,
      policePremiumPayers: []
    };
    const policyA: BasisInsurancePolicy = {
      validFrom: tomorrow,
      validTo: future,
      carrier: arcosana,
      policePremiumPayers: [policePremiumPayerA]
    };
    const policyB: BasisInsurancePolicy = {
      validFrom: yesterday,
      validTo: tomorrow,
      carrier: css,
      policePremiumPayers: [policePremiumPayerB]
    };
    const policyC: BasisInsurancePolicy = {
      validFrom: yesterday,
      validTo: tomorrow,
      carrier: arcosana,
      policePremiumPayers: [policePremiumPayerC]
    };
    return [policyWithoutPremiumPayer, policyA, policyB, policyC];
  }

});
