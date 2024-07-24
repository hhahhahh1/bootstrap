import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountCreationComponent } from './feature/account-creation/account-creation.component';
import { LoginComponent } from './feature/login/login.component';
import { AccountComponent } from './feature/account/account.component';
import { AnimalSearchComponent } from './feature/animal-search/animal-search.component';
import { ErrorComponent } from './feature/error/error.component';
import { MyAnimalsComponent } from './feature/account/my-animals/my-animals.component';
import { SttingCreationComponent } from './feature/stting-creation/stting-creation.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'devenir-membre', component: AccountCreationComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'mon-compte/:id', component: AccountComponent },
  { path: 'recherche', component: AnimalSearchComponent },
  { path: 'mes-animaux', component: MyAnimalsComponent },
  { path: 'annonce', component: SttingCreationComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
