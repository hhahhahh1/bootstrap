import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { OffsetDateDTO } from '../models/date.model';
import { TestService } from './test.service';
import { DisponibilityDTO } from '../models/disponibilityDTO.model';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  x: string;


  test: string;
  picker: any;
  picker2: any;
  offsetDate: OffsetDateDTO;

  beggining: Date;
  end: Date;

  dispo: DisponibilityDTO = new DisponibilityDTO();

  constructor(private adapter: DateAdapter<any>, public testServ: TestService) { }

  ngOnInit() {
    this.adapter.setLocale('fr');
  }

  log() {
    console.log(this.dispo);



  }

  storeBeggining(event: Date) {
    event.setHours(1);
    this.dispo.beggining = event.toJSON();
  }

  storeEnd(event: Date) {
    event.setHours(1);
    this.dispo.end = event.toJSON();
  }

  sendDate() {
    console.log(this.dispo);
    this.testServ.testOffset(this.dispo);
  }


}
