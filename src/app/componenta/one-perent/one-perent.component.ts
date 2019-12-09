import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-perent',
  templateUrl: './one-perent.component.html',
  styleUrls: ['./one-perent.component.css']
})
export class OnePerentComponent implements OnInit {
  station_num = 60120;
  massege: string;
  clickTabelP(val) {
    alert(val);
    this.massege = val;
  }
  constructor() { }

  ngOnInit() {
  }

}


