import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isDisplayed = false;
  @Input() username: string;
  @Input() isLoggedIn: boolean;
  @Input() id: string;

  constructor(private tokenService: TokenStorageService) {}

  ngOnInit() {

    if (this.username === null || this.username === undefined || this.username === '') {
      this.username = 'Inscription / Connexion';
    }

    console.log(this.id);
    console.log(this.isLoggedIn);


  }

  uncheck() {
    document.getElementById('dd-input').click();
  }


  logout() {
    this.tokenService.signOut();
    window.location.reload();
  }

change() {
  this.isDisplayed = !this.isDisplayed;
}

}
