import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navtest',
  templateUrl: './navtest.component.html',
  styleUrls: ['./navtest.component.scss'],
})
export class NavtestComponent implements OnInit {

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

}
