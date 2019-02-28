import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  questionsUrl = 'https://pengwinning.boldpenguin.com/api/questions';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<any>(this.questionsUrl, httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer e60ce72ecdebc37631b0cc1de13a2f15'
  })
}
