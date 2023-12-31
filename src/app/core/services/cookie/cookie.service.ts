import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  private readonly documentIsAccessible: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: any) {
    this.documentIsAccessible = isPlatformBrowser(this.platformId);
  }

  /**
   * @param name Cookie name
   */
  check(name: string): boolean {
    if (!this.documentIsAccessible) {
      return false;
    }

    name = encodeURIComponent(name);

    const regExp: RegExp = this.getCookieRegExp(name);
    const exists: boolean = regExp.test(this.document.cookie);

    return exists;
  }

  /**
   * @param name Cookie name
   */
  get<T>(name: string): T {
    if (this.documentIsAccessible && this.check(name)) {
      name = encodeURIComponent(name);

      try {
        const regExp: RegExp = this.getCookieRegExp(name);
        const result: RegExpExecArray = regExp.exec(this.document.cookie) as any;

        return this.sanitizeStoredValue(decodeURIComponent(result[1]));
      } catch (error) {
        this.delete(name);
        return null as any;
      }
    } else {
      return null as any;
    }
  }

  getAll(): any {
    if (!this.documentIsAccessible) {
      return {};
    }

    const cookies: any = {};
    const document: any = this.document;

    if (document.cookie && document.cookie !== '') {
      const split: Array<string> = document.cookie.split(';');
      // eslint-disable-next-line
      for (let i = 0; i < split.length; i += 1) {
        const currentCookie: Array<string> = split[i].split('=');

        currentCookie[0] = currentCookie[0].replace(/^ /, '');
        cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
      }
    }

    return cookies;
  }

  /**
   * @param name     Cookie name
   * @param value    Cookie value
   * @param expires  Number of days until the cookies expires or an actual `Date`
   * @param path     Cookie path
   * @param domain   Cookie domain
   * @param secure   Secure flag
   * @param sameSite OWASP samesite token `Lax` or `Strict`
   */
  set<T>(
    name: string,
    value: T,
    expires?: number | Date,
    path: string = '/',
    domain?: string,
    secure?: boolean,
    sameSite?: 'Lax' | 'Strict',
  ): void {
    if (!this.documentIsAccessible) {
      return;
    }

    let cookieString: string = encodeURIComponent(name) + '=' + encodeURIComponent(JSON.stringify(value)) + ';';

    if (expires) {
      if (typeof expires === 'number') {
        const dateExpires: Date = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);

        cookieString += 'expires=' + dateExpires.toUTCString() + ';';
      } else {
        cookieString += 'expires=' + expires.toUTCString() + ';';
      }
    }

    if (path) {
      cookieString += 'path=' + path + ';';
    }

    if (domain) {
      cookieString += 'domain=' + domain + ';';
    }

    if (secure) {
      cookieString += 'secure;';
    }

    if (sameSite) {
      cookieString += 'sameSite=' + sameSite + ';';
    }

    this.document.cookie = cookieString;
  }

  /**
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  delete(name: string, path?: string, domain?: string): void {
    if (!this.documentIsAccessible) {
      return;
    }

    this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain);
  }

  /**
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  deleteAll(path?: string, domain?: string): void {
    if (!this.documentIsAccessible) {
      return;
    }

    const cookies: any = this.getAll();

    for (const cookieName in cookies) {
      if (cookies.hasOwnProperty(cookieName)) {
        this.delete(cookieName, path, domain);
      }
    }
  }

  /**
   * @param name Cookie name
   */
  private getCookieRegExp(name: string): RegExp {
    const escapedName: string = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi, '\\$1');

    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
  }

  private sanitizeStoredValue(value: string) {
    if (!value || value === 'undefined' || value === 'null') {
      return null;
    }

    return JSON.parse(value);
  }
}
