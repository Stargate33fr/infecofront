import { Injectable } from '@angular/core';
import parsePhoneNumberFromString from 'libphonenumber-js';

@Injectable({
  providedIn: 'root',
})
export class PhoneEmailValidationService {
  constructor() {}

  valideEmail(email: string): boolean {
    const _email: string = email;
    if (!_email) {
      return null as any;
    }
    // eslint-disable-next-line max-len
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      _email,
    )
      ? false
      : true;
  }

  validatePhoneNumber(telephone: string): boolean {
    const _phone: string = telephone;
    if (!_phone || _phone.length < 10) {
      return true;
    }

    // TODO multilang
    const phoneNumber = parsePhoneNumberFromString(_phone, 'FR');
    const error = { phoneNumberValidator: true };

    if (!phoneNumber) {
      return false;
    }

    return phoneNumber.isValid() ? true : false;
  }
}
