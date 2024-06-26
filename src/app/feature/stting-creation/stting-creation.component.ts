import { Component, OnInit, Inject } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/models/response/userDetails.model';
import { Address } from 'src/app/models/address.model';
import { Animal, Sickness } from 'src/app/models/animal.model';
import { SittingDto } from 'src/app/models/sitting.model';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { SittingService } from 'src/app/services/sitting.service';

@Component({
  selector: 'app-stting-creation',
  templateUrl: './stting-creation.component.html',
  styleUrls: ['./stting-creation.component.scss']
})
export class SttingCreationComponent implements OnInit {

  userId: string;
  canCreateSitting;
  animals: Animal[];
  animal: Animal = new Animal('', '', '', 0 , '', '', false, '', '', new Array<Sickness>());
  address: Address = new Address('', '', '', '', '');
  user: UserDetails = new UserDetails('', '', '', '', '', 0, '', this.address,  this.animals);
  sitting: SittingDto = new SittingDto('', '', '', '', '', '');
  cancelCreate = false;


  constructor(private adapter: DateAdapter<any>, private tokenStorageService: TokenStorageService,
              private userService: UserService, private sittingService: SittingService, @Inject(MAT_DATE_LOCALE) private _locale: string) { }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.userId = user.id;
    this.userService.checkIfUserHasAnimals(this.userId).subscribe(data => {
      this.canCreateSitting = data;
    });
    this.getUserDetails(this.userId);
    this.adapter.setLocale('fr-FR');

  }

  submitSitting() {
    this.sitting.userId = this.userId;
    console.log('SITTING ', this.sitting);
    this.sittingService.submitSitting(this.sitting).subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }

  checkDateValidity() {
    const now = new Date();
    const beggining = new Date(this.sitting.shiftBeggining);
    console.log('now ' + now + 'beg ' + beggining);

    if(now > beggining) {
      alert('MAUVAISE DATE');
    }

  }

  checkIfUserHasAnimals() {

  }

  // Retrieves user's infos
  getUserDetails(id: string) {
    this.userService.getUserDetails(id).subscribe(
      data => {
        console.log('data', data);
        this.user = data;
        console.log('user', this.user);
      },
      err => {
        console.log(err);
      }
    );
  }

  storeBeggining(event: Date) {
    event.setHours(2);
    this.sitting.shiftBeggining = event.toISOString();
    console.log(this.sitting.shiftBeggining);

  }

  storeEnd(event: Date) {
    event.setHours(2);
    this.sitting.shiftEnd = event.toJSON();
    console.log(this.sitting.shiftEnd);
  }

  toggleCancelCreate() {
    this.cancelCreate = !this.cancelCreate;
  }

}
