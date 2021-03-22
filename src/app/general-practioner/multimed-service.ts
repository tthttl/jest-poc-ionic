import { HttpClient, HttpHeaders, HttpParameterCodec, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Address, Hausarzt } from '../helpers/model/tracking/model';
import { Configuration } from './configuration';
import { CareProvider } from './model';

export interface Adresse {
  strasse?: string;
  nummer?: string;
  plz?: string;
  ort?: string;
}

export interface Leistungserbringer {
  partnerNr: string;
  titel?: string;
  name?: string;
  telefon?: string;
  adresse: Adresse;
}

export interface PartnerHausarzt {
  partnerNr: string;
  titel?: string;
  name?: string;
  telefon?: string;
  adresse: Adresse;
}

export const BASE_PATH = new InjectionToken<string>('basePath');

@Injectable()
export class MultimedService {

  protected basePath = 'https://api-dev.css.ch';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder;
  }

  public getHausarzt(id: string, observe: any = 'body', reportProgress: boolean = false,
                     options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getHausarzt.');
    }

    let headers = this.defaultHeaders;

    let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
      responseType = 'text';
    }

    return this.httpClient
      .get<Hausarzt>(`${this.configuration.basePath}/css/kuzu/app/v1/partner/${encodeURIComponent(String(id))}/hausarzt`,
        {
          responseType: responseType as any,
          withCredentials: this.configuration.withCredentials,
          headers,
          observe,
          reportProgress
        }
      );
  }


  getGeneralPractitioner(userId: string): Observable<HttpResponse<CareProvider>> {
    return this.getHausarzt(userId, 'response').pipe(
      map((response: HttpResponse<PartnerHausarzt>) => ({
        ...response,
        body: this.convertLeistungserbringerOrHausarztToCareProvider(response.body)
      }) as HttpResponse<CareProvider>)
    );
  }

  convertLeistungserbringerOrHausarztToCareProvider(leistungserbringer: Leistungserbringer |
    PartnerHausarzt): CareProvider {
    const address = this.convertLeistungserbringerAdresseToCareProviderAddress(leistungserbringer.adresse);
    return {
      title: leistungserbringer.titel,
      name: leistungserbringer.name,
      address,
      addressAvailable: this.isAddressAvailable(address),
      phone: leistungserbringer.telefon
    };
  }

  convertLeistungserbringerAdresseToCareProviderAddress(address: Adresse): Address {
    return {
      street: address.strasse,
      streetNumber: address.nummer,
      city: address.ort,
      zip: address.plz
    };
  }

  isAddressAvailable(address: Address) {
    return Boolean(address.street && address.city);
  }

}
