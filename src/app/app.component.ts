import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  questions;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.showQuestions();
  }

  showQuestions() {
    this.api.getQuestions()
        .subscribe((data) => {
          this.questions = data;
        });
  }
}
