import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input('data') data: string;
  pies: ViewItem[] = [];

  constructor() {
  }

  ngOnInit() {
    let json = JSON.parse(this.data);
    if (json instanceof Array) {
      for (let item of json) {
        this.pies.push(item);
      }
    } else {
      for (let item in json) {
        this.pies.push({name: item, value: json[item], path: null, color: null});
      }
    }

    let total = 0;
    let startX = 1;
    let startY = 0;
    for (let pie of this.pies) {
      if (!pie.color) {
        pie.color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      }
      total += pie.value;
    }
    let radian = 0;
    for (let pie of this.pies) {
      let ratio = pie.value / total;
      let largeArcFlag = ratio > 0.5 ? 1 : 0;
      radian += ratio * 2 * Math.PI;
      let endX = Math.cos(radian);
      let endY = Math.sin(radian);
      pie.path = "M 0 0 L " + startX + " " + startY + " A 1 1 0 " + largeArcFlag + " 1 " + endX + " " + endY + " Z";
      startX = endX;
      startY = endY;
    }
  }

}
