import { TranslateService } from '@ngx-translate/core';
import { addDays, format as formatFns, isValid } from 'date-fns';
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
  Law,
  PolicePremiumPayer,
  PolicyProduct, TextConfigTranslations,
  TrackingCookieUserInfo
} from './model/tracking/model';
import { Versichertenkarte } from './model/versichertenkarte';

export const userDateFormat = 'dd.MM.yyyy';
export const serverDateFormat = 'yyyy-MM-dd';

export function formatDate(date: Date, formatString: string = 'yyyy-MM-dd'): string {
  if (isValid(date)) {
    return formatFns(date, formatString);
  }
  return '';
}

export function flatten<T>(array: T[][]): T[] {
  return [].concat(...array);
}

export function getClosestElement(element: Element, attribute: string) {
  let closestElement = element;
  while ((!closestElement.hasAttribute && closestElement.parentElement) ||
  (closestElement.hasAttribute && !closestElement.hasAttribute(attribute) && !!closestElement.parentElement)) {
    closestElement = closestElement.parentElement;
  }

  return closestElement.hasAttribute && closestElement.hasAttribute(attribute) ? closestElement : null;
}

export function convertPersonToCookieUserInfo(person: AuthorizedPerson, userAddress: Address): TrackingCookieUserInfo {
  return {
    dateOfBirth: person.geburtsdatum && formatDate(new Date(person.geburtsdatum), 'dd.MM.yyyy') || '',
    gender: getGender(person),
    postalCode: getPostalCode(userAddress),
    townNr: getTownNr(userAddress),
    onrp: getOnrp(userAddress)
  };
}

export function getOnrp(userAddress: Address): number {
  // tslint:disable-next-line:radix
  return userAddress ? Number.parseInt(userAddress.streetNumber) : 0;
}

export function getPostalCode(userAddress: Address): string {
  return userAddress ? `${userAddress.zip} ${userAddress.city}` : '';
}

export function getTownNr(userAddress: Address): string {
  return userAddress ? userAddress.townNr || '' : '';
}

export function getGender(authorizedPerson: AuthorizedPerson) {
  if (authorizedPerson.geschlecht) {
    return authorizedPerson.geschlecht === 'MAENNLICH' ? 'm' : authorizedPerson.geschlecht === 'WEIBLICH' ? 'f' : '';
  }
  return '';
}

export function convertPostAddressArray2AddressArray(postAddresses: PostAdresse[]): Address[] {
  return postAddresses.map((postAddress: PostAdresse) => convertPostAddress2Address(postAddress));
}

function convertPostAddress2Address(postAddress: PostAdresse): Address {
  return {
    city: postAddress.ort,
    street: postAddress.strasse,
    streetNumber: postAddress.hausnummer,
    zip: postAddress.postleitzahl,
    townNr: postAddress.gemeindeNummer,
    onrp: postAddress.onrp
  };
}

export function convertPoliciesToBasisInsurancePolicy(policies: Policy[]): BasisInsurancePolicy[] {
  return policies.map((policy: Policy) => convertPolicyToBasisInsurancePolicy(policy));
}

function convertPolicyToBasisInsurancePolicy(policy: Policy): BasisInsurancePolicy {
  return {
    validFrom: new Date(policy.validFrom),
    validTo: new Date(policy.validTo),
    carrier: policy.anbieter,
    policePremiumPayers: convertPraemienZahlersToPremiumPayers(policy.policePraemienzahler)
  };
}

function convertPraemienZahlersToPremiumPayers(policePraemienzahlers: PolicePraemienzahler[]): PolicePremiumPayer[] {
  return policePraemienzahlers.map((policePraemienzahler) => convertPreamienZahlerToPremiumPayer(policePraemienzahler));
}

function convertPreamienZahlerToPremiumPayer(policePraemienzahler: PolicePraemienzahler): PolicePremiumPayer {
  return {
    policyProducts: convertPolicyProduktToPolicyProduct(policePraemienzahler.policeProdukt)
  };
}

function convertPolicyProduktToPolicyProduct(policeProdukts: PoliceProdukt[]): PolicyProduct[] {
  return policeProdukts.map((policeProdukt) => convertPoliceProduktToPoliceProduct(policeProdukt));
}

function convertPoliceProduktToPoliceProduct(policeProdukt: PoliceProdukt): PolicyProduct {
  return {
    law: policeProdukt.gesetz,
    productNameLabel: policeProdukt.produktNameLabel
  };
}

export function convertFrvPoliciesToComplementaryPolicies(policiesDto: FrvPolicy[]): ComplementaryPolicy[] {
  return policiesDto.map((policyDto: FrvPolicy) => convertPolicyDtoToComplementaryPolicy(policyDto));
}

export function convertShvPoliciesToComplementaryPolicies(policiesDto: ShvPolicy[]): ComplementaryPolicy[] {
  return policiesDto.map((policyDto: ShvPolicy) => convertPolicyDtoToComplementaryPolicy(policyDto));
}

export function convertSpvPoliciesToComplementaryPolicies(policiesDto: SpvPolicy[]): ComplementaryPolicy[] {
  return policiesDto.map((policyDto: SpvPolicy) => convertPolicyDtoToComplementaryPolicy(policyDto));
}

function convertPolicyDtoToComplementaryPolicy(policyDto: ShvPolicy | FrvPolicy | SpvPolicy): ComplementaryPolicy {
  return {
    contractExpiryDate: new Date(policyDto.vertragsende)
  };
}

export function findActiveBasisInsurancePolicies(policies: BasisInsurancePolicy[], today: Date): BasisInsurancePolicy[] {
  return policies
    .filter((policy: BasisInsurancePolicy) => policy.validFrom.getTime() < today.getTime() &&
      isActive(policy.validTo, today));
}

export function findActiveComplementaryPolicies(policies: ComplementaryPolicy[], today: Date): ComplementaryPolicy[] {
  return policies
    .filter((policy: ComplementaryPolicy) => isActive(policy.contractExpiryDate, today));
}

function isActive(contractExpiryDate: Date, today: Date) {
  const expiryDate = addDays(new Date(contractExpiryDate), 1);
  return expiryDate.getTime() > today.getTime();
}

export function getCarrier(policies: BasisInsurancePolicy[]): string {
  return policies
    .map((policy: BasisInsurancePolicy) => policy.carrier)
    .join(', ');
}

export function getKvg(
  policies: BasisInsurancePolicy[],
  translationService: TranslateService,
  versichertenKarte: Versichertenkarte
): string {
  const kvg = getProductNameLabelFromActivePolicies(policies, 'KVG').map((kvgLabel) =>
    findProductIdForProductNameLabel(kvgLabel, translationService.currentLang, translationService.translations)).join(', ');
  if (!kvg) {
    return (versichertenKarte && versichertenKarte.okpModell) ? versichertenKarte.okpModell.toLowerCase() : 'nein';
  }
  return kvg;
}

export function getVvg(
  policies: BasisInsurancePolicy[],
  translationService: TranslateService
): string {
  const vvg = getProductNameLabelFromActivePolicies(policies, 'VVG').map((vvgLabel) =>
    findProductIdForProductNameLabel(vvgLabel, translationService.currentLang, translationService.translations)).join(', ');
  if (!vvg) {
    return 'nein';
  }
  return vvg;
}

export function getProductNameLabelFromActivePolicies(policies: BasisInsurancePolicy[], law: Law): string[] {
  const policeProducts: PolicyProduct [][] = policies
    .map((policy) => policy.policePremiumPayers)
    .filter((policePremiumPayer) => policePremiumPayer.length > 0)
    .map((policePremiumPayers) => policePremiumPayers[0])
    .map((firstPremiumPayer) => firstPremiumPayer.policyProducts);
  return flatten(policeProducts)
    .filter((policyProduct: PolicyProduct) => policyProduct.law === law)
    .map((policyProduct: PolicyProduct) => policyProduct.productNameLabel);
}

export function findProductIdForProductNameLabel(
  productNameLabel: string,
  currentLang: string,
  translations: TextConfigTranslations
): string {
  const langTranslations = translations[currentLang];
  if (langTranslations) {
    const product = langTranslations.textconfig && langTranslations.textconfig.produkte && langTranslations.textconfig.produkte.product;
    if (product) {
      const productKey = Object.keys(product).filter((key) => productNameLabel.includes(product[key].label));
      if (productKey && productKey.length > 0) {
        return productKey[0];
      }
    }
  }
  return productNameLabel;
}
