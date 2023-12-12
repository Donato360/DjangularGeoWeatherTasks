import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'f2fb2893e543333392dae5e3cac07c30';

  constructor(private http: HttpClient) {}

  // Public method to retrieve all countries from the API as an array. Returns an Observable stream.
  getWeather(location: string): Observable<any[]> {
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=' + this.apiKey + '&units=metric';
    return this.http.get<any[]>(apiUrl);
  }
}