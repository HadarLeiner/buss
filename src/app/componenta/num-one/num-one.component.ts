import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BussService } from '../../services/buss.service'

@Component({
  selector: 'bus-list-below',
  templateUrl: './num-one.component.html',
  styleUrls: ['./num-one.component.css']
})
export class NumOneComponent implements OnInit {
  bussesArray;
  kavimExsis = true;
  isNewBus = false;
  @Input() line: number;
  @Output() click_Tabel: EventEmitter<string> = new EventEmitter<string>();
  clickTabel() {
    this.click_Tabel.emit("כבר לחצו עליי");
  }
  closeParent(val) {
    this.isNewBus = val;
  }
  addBus() {
    this.isNewBus = true;
  }

  constructor(public _buss: BussService) {

  }

  ngOnInit() {
    this._buss.addBus().subscribe((d) => {
      this.bussesArray = d;
      console.log(this.bussesArray);
    });
  }


}
