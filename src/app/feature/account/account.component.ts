import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/models/response/userDetails.model';
import { Animal, Sickness } from 'src/app/models/animal.model';
import { Disponibility } from 'src/app/models/disponibility.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HomeComponent } from 'src/app/home/home.component';
import { Address } from 'src/app/models/address.model';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isLoggedIn = false;
  animals: Animal[];
  disponibility: Disponibility[];
  autocompleteResult;
  addressForAutocomplete = '';
  address: Address = new Address('', '', '', '', '');
  user: UserDetails = new UserDetails('', '', '', '', '', 0, '', this.address,  this.animals);
  viewType = 'READ';
  errorMessageOnUpdate;

  constructor(private route: ActivatedRoute, private userService: UserService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    // If nobody is logged to the web site => redirect
    if(!this.isLoggedIn) {
      this.router.navigateByUrl('/');
    }

    // Get userInfo on load
    this.getUserDetails(this.route.snapshot.params.id);

    // Disable all inputs when component is loaded
    document.querySelectorAll('input').forEach( input => {
      input.disabled = true;
    });
  }

  // Retrieves user's infos
  getUserDetails(id: string) {
    this.userService.getUserDetails(id).subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.log(err);

      }
    );
  }

  // Call position stack API to autcomplete input address
  autocomplete(){
    if (this.addressForAutocomplete.length > 2 && this.addressForAutocomplete.length % 2 === 0) {
      let transition;
      this.userService.autocomplete(this.addressForAutocomplete, this.user.adress.city).subscribe(x => {
        transition = x;
        console.log(transition);
        this.autocompleteResult = transition.data;
        console.log('autocompleteResult', this.autocompleteResult);
      },

      err => console.log(err));
    }
  }

  selectAddress(input: any) {
    console.log('SELECTION :', input);
  }

  onSortChange(e) {
    this.sort(e.target.value);
 }

 sort(field: any) {
  console.log('SELECTION : ', field);

}

// Toggle input available
toggleUpdate() {
    this.viewType = 'UPDATE';
    document.querySelectorAll('input').forEach( input => {
      input.disabled = false;
    });
  }

// Disable all inputs
toggleRead() {
  this.viewType = 'READ';
  document.querySelectorAll('input').forEach( input => {
    input.disabled = true;
  });
}

// Call backend to update user with new infos
updateUser() {
  this.userService.updateUser(this.user).subscribe(
    data => {
      this.user = data;
      this.viewType = 'READ';
      alert('Modifications Enregistrées');
    }, err => {
      this.errorMessageOnUpdate = err;
    }
  );
}

}
