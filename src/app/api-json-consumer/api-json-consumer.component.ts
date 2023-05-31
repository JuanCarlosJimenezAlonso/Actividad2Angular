import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-json-consumer',
  templateUrl: './api-json-consumer.component.html',
  styleUrls: ['./api-json-consumer.component.css']
})
export class ApiJsonConsumerComponent {

  constructor(private http: HttpClient) {}

  getDataFromAPI() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Reemplaza con la URL de la API que desees utilizar

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
