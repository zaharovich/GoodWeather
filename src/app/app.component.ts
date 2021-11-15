import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  input = 'input';
  response:any = "";
  errResponse:any = "";
  apiKey:string = "6cf5a04ce2e382f2a1c5ca66540956f4"
  searchCity:string = "";
  oneItem = 'oneItem';


  constructor(private weather:WeatherService, private http:HttpClient) {

    this.weather.getData().subscribe((response) =>{
      this.response = response
    })

  }

  search() {
    this.http.get('http://api.openweathermap.org/data/2.5/forecast/?q=' + this.searchCity + '&lang=ru&units=metric&appid=' + this.apiKey)
      .subscribe((response) =>{
        this.response = response
        this.input = 'input';

        console.log(response);

      },err => {
        this.input = 'input error';
        this.errResponse = err
      })
  }
}
