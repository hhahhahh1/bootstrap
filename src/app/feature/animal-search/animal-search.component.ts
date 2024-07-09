import { Component, OnInit } from '@angular/core';
import { SittingService } from 'src/app/services/sitting.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.scss']
})
export class AnimalSearchComponent implements OnInit {

  sittingList: Array<any> = new Array<any>();
  pageNumber = 0;
  postcode: number;
  notscrolly = true;
  notEmptyPost = true;
  shiftBeggining: string;
  shiftEnd: string;


  constructor(private sittingService: SittingService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  search() {
    this.sittingList = [];
    this.notscrolly = true;
    this.notEmptyPost = true;
    this.pageNumber = 0;
    this.getSittings();
  }

  getSittings() {
    this.sittingService.getAllSittingsPaginatedByPostcode(this.pageNumber, this.postcode, this.shiftBeggining, this.shiftEnd).subscribe(
      data => {
        console.log(data);
        const newPost = data;
        console.log('NEW POST : ', newPost);

        this.spinner.hide();
        this.pageNumber++;
        if (newPost.length === 0 ) {
          this.notEmptyPost =  false;
        }
        this.sittingList = this.sittingList.concat(newPost);
        console.log('LIST CONCAT : ', this.sittingList);

        this.notscrolly = true;
      }
    );
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      console.log('SCROLLED');

      this.spinner.show();
      this.notscrolly = false;
      this.getSittings();
   }
  }

  storeBeggining(event: Date) {
    event.setHours(2);
    this.shiftBeggining = event.toISOString();
    console.log(this.shiftBeggining);

  }

  storeEnd(event: Date) {
    event.setHours(2);
    this.shiftEnd = event.toJSON();
    console.log(this.shiftEnd);
  }

}
