/*
    task-list.compnenlocation.servicet.ts

    @Injectable service to make api calls and retrieve location data from https://restcountries.com

    Author information is provided for reference.
    Donato Cappiello (dino.cappiello@gmail.com)
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  // Service  provided in the root (available application-wide).
  providedIn: 'root', 
})
// LocationService class to handle API calls related to location data.
export class LocationService {
  // Private property to hold the base URL of the REST countries API.
  private apiUrl = 'https://restcountries.com/v2/all'; 

  // Constructor that initializes the private http property with an instance of HttpClient to make API requests.
  constructor(private http: HttpClient) {}

  // Public method to retrieve all countries from the API as an array. Returns an Observable stream.
  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
