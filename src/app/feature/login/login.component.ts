import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDto } from 'src/app/models/auth.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  request: LoginDto = new LoginDto('', '');
  isSuccessful = false;
  isFailed = false;
  isLoggedIn = false;
  roles: string[] = [];
  isLoading = false;


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigateByUrl('/')
    }
  }

  login() {
    this.isFailed = false;
    this.isLoading = true;
    this.authService.login(this.request).subscribe(
      data => {
        console.log('DATA', data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoggedIn = true;
        this.isLoading = false;
        this.isSuccessful = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        console.log(err);
        this.isLoading = false;
        this.isFailed = true;
        console.log('ERRROR');

      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
