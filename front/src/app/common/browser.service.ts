import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor() { }

  public getParams() {
    const query = window.location.search;
    return new URLSearchParams(query);
  }

}
