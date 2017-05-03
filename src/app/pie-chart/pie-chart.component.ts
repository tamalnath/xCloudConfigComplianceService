import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input('items') items: ViewItem[] = [];

  constructor() {
    this.items.push({name: "ABCDEFG", value: 7, path: null, color: null, ratio: null });
    this.items.push({name: "HIJKLM", value: 6, path: null, color: null, ratio: null });
    this.items.push({name: "NOPQR", value: 5, path: null, color: null, ratio: null });
    this.items.push({name: "STUV", value: 4, path: null, color: null, ratio: null });
    this.items.push({name: "WXY", value: 3, path: null, color: null, ratio: null });
    this.items.push({name: "Z", value: 1, path: null, color: null, ratio: null });
  }

  ngOnInit() {
    let total = 0;
    let startX = 1;
    let startY = 0;
    for (let item of this.items) {
      if (!item.color) {
        item.color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      }
      total += item.value;
    }
    let radian = 0;
    for (let item of this.items) {
      let ratio = item.value / total;
      let largeArcFlag = ratio > 0.5 ? 1 : 0;
      radian += ratio * 2 * Math.PI;
      let endX = Math.cos(radian);
      let endY = Math.sin(radian);
      item.path = "M 0 0 L " + startX + " " + startY + " A 1 1 0 " + largeArcFlag + " 1 " + endX + " " + endY + " Z";
      startX = endX;
      startY = endY;
    }
  }

}
