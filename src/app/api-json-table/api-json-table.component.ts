import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-json-table',
  templateUrl: './api-json-table.component.html',
  styleUrls: ['./api-json-table.component.css']
})
export class ApiJsonTableComponent {

  constructor(private http: HttpClient) {}

  getDataFromAPI() {
    const apiUrl = 'https://dummyjson.com/posts'; // Reemplaza con la URL de la API que desees utilizar

    this.http.get(apiUrl)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error("Error en la llamada a la API:", error);
        }
      );
  }
}
