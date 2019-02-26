import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Iimage } from '../shared/image';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  ima : Iimage[] = [];

  
  fileToUpload : File = null;
  image:Iimage[] = [];
  constructor(private imageService: DataService ) { }

  //ImagePath : string;

  ngOnInit() {
    //this.imageService.getImage().subscribe((metadata:Iimage[])=>{ this.ima = metadata
    //});

  }

  //imageUrl: string = '../assets/avatar.png';
  imageUrl: string = 'http://9952666f.ngrok.io/Image/download192007116.jpeg';
  
   
  hello: Iimage = this.ima[1];
 // imageUrl = this.hello;
 //imageUrl: string = this.hello.ImagePath;

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  OnSubmit(Image){
    this.imageService.postFile(this.fileToUpload).subscribe(
      data => {
        console.log(data);
        
        console.log('upload is done');
        Image.value=null;
        this.imageUrl = 'http://9952666f.ngrok.io/Image/download192007116.jpeg';
      //this.imageUrl = this.hello.ImagePath;
      }
    );
  }





}
