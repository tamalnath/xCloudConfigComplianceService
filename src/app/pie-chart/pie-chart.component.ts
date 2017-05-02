import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  data: Pie[] = [];

  constructor() {
  }

  ngOnInit() {
    this.data.push({name: "In Compliance", path: "M 0 0 L 0 -1 A 1 1 0 1 1 -1 0 Z", color: "green"});
  }

}
interface Pie {
  name: string;
  path: string;
  color: string;
}
