import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {

  }

  getData () {
    let url ="http://api.openweathermap.org/data/2.5/forecast?q=kiev&lang=ru&units=metric&appid=6cf5a04ce2e382f2a1c5ca66540956f4";
    return this.http.get(url);
  }

}
