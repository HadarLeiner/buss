import { Component, OnInit } from '@angular/core';
import * as busClass from '../../class/tergul'
import { BussService } from '../../services/buss.service'


@Component({
  selector: 'app-num-two',
  templateUrl: './num-two.component.html',
  styleUrls: ['./num-two.component.css']
})
export class NumTwoComponent implements OnInit {
  logo = "/src/app/pic/egged.png"
  line;
  bussesArray = this._buss.busArr;
  constructor(public _buss: BussService) { }

  ngOnInit() {
  }

}
