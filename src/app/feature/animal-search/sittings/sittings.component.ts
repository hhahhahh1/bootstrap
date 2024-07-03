import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sittings',
  templateUrl: './sittings.component.html',
  styleUrls: ['./sittings.component.scss']
})
export class SittingsComponent implements OnInit {

  @Input() sitting: any;
  shiftBeggining;
  shiftEnd;
  retrievedImage: any;
  retrieveResonse: any;
  base64Data: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.shiftBeggining = new Date(this.sitting.shiftBeggining).toLocaleDateString('fr-FR', options);
    this.shiftEnd = new Date(this.sitting.shiftEnd).toLocaleDateString('fr-FR', options);
    this.getImage();
  }

  getImage() {
    // Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient
      .get('http://localhost:8080/api/v1/photo/get/' + this.sitting.animal.id)
      .subscribe((res) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.image;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      });
  }

}
