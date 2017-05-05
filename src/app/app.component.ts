import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'X-Cloud Config and Compliance Service';
  vm = {};

  constructor (private http: Http) {}

  save() {
    this.http.post("http://localhost:8000/bootstrap/aws/endpoints", this.vm);
  }
}
