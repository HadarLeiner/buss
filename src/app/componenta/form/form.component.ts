import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as busClass from '../../class/tergul'
import { BussService } from '../../services/buss.service'
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  bus = new busClass.bus_line(0, "", "", false, [], 0);
  @Output() close_form: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  createBus(x) {
    this._buss.pushBus(x).subscribe((d) => {
      console.log(d);
    });
    this.close_form.emit(false);
  }

  constructor(public _buss: BussService) { }

  ngOnInit() {


  }

}
