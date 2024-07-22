import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepicker, MatDatepickerContent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { authInterceptorProviders } from './auth/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { AccountCreationComponent } from './feature/account-creation/account-creation.component';
import { AnimalSearchComponent } from './feature/animal-search/animal-search.component';
import { LoginComponent } from './feature/login/login.component';
import { AccountComponent } from './feature/account/account.component';
import { ErrorComponent } from './feature/error/error.component';
import { MyAnimalsComponent } from './feature/account/my-animals/my-animals.component';
import { SttingCreationComponent } from './feature/stting-creation/stting-creation.component';
import { SittingsComponent } from './feature/animal-search/sittings/sittings.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AnimalBubbleComponent, DialogElementsExampleDialog } from './feature/account/animal-bubble/animal-bubble.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MapComponent } from './feature/animal-search/map/map.component';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AccountCreationComponent,
    AnimalSearchComponent,
    LoginComponent,
    AccountComponent,
    ErrorComponent,
    MyAnimalsComponent,
    SttingCreationComponent,
    SittingsComponent,
    AnimalBubbleComponent,
    DialogElementsExampleDialog,
    MapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    MatDialogModule,
    // AngularFireModule.initializeApp(environment.firebase),
 	  // AngularFirestoreModule,
  ],
  entryComponents: [
    DialogElementsExampleDialog
  ],
  providers: [authInterceptorProviders,
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
