import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Animal, Sickness, AnimalWithUserId } from 'src/app/models/animal.model';
import { TokenStorageService } from '../../../services/token-storage.service';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-my-animals',
  templateUrl: './my-animals.component.html',
  styleUrls: ['./my-animals.component.scss']
})
export class MyAnimalsComponent implements OnInit {

  userId: string;
  userAnimals;
  file: File;
  selectedFiles: FileList;
  requestAnimal: AnimalWithUserId = new AnimalWithUserId('', '', 0 , '', '', false, '', '', new Array<Sickness>(), this.userId);
  progress: { percentage: number } = { percentage: 0 };



  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.userId = user.id;
    this.getUsersAnimals();
  }

  getUsersAnimals() {
    this.userService.getUsersAnimals(this.userId).subscribe( data => {
      console.log(data);
      this.userAnimals = data;
    },
    err => console.log(err)
    );
  }



  submitAnimal(){
    this.requestAnimal.userId = this.userId;
    this.userService.addAnimalToUser(this.requestAnimal).subscribe(data =>
      this.getUsersAnimals(),
      err => console.log(err)
      );

  }

  onselectedFile(event) {
    const file = event.target.files.item(0);
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;

    } else {
      alert('invalid format!');
    }
  }



}
