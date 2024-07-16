import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-animal-bubble',
  templateUrl: './animal-bubble.component.html',
  styleUrls: ['./animal-bubble.component.scss'],
})
export class AnimalBubbleComponent implements OnInit {
  @Input() animal: any;

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  animalPhoto: any;

  constructor(private httpClient: HttpClient, public dialog: MatDialog, private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    // console.log('ON INIT : ', this.animal);
    // this.animalPhoto = 'data:image/jpeg;base64,' + this.animal.photo.image;
    // console.log(this.animalPhoto);
    this.getImage();
  }

  // Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    // Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient
      .get('http://localhost:8080/api/v1/photo/get/' + this.animal.id)
      .subscribe((res) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.image;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      });
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog, {
      data: { animal: this.animal },
    });
  }
}

@Component({
  selector: "dialog-elements-example-dialog",
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  selectedFile: File;
  message: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpClient: HttpClient
  ) {}

  // Gets called when the user selects an image
  public onFileChanged(event) {
    // Select File
    this.selectedFile = event.target.files[0];
  }
  // Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append(
      'imageFile',
      this.selectedFile,
      this.selectedFile.name
    );
    // Make a call to the Spring Boot Application to save the image
    this.httpClient
      .post(
        `http://localhost:8080/api/v1/photo/upload/animal/${this.data.animal.id}`,
        uploadImageData,
        { observe: 'response' }
      )
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }
}
