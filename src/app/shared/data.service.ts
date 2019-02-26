import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable ,of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute, UrlHandlingStrategy } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class DataService{
    private Url = '../assets/mock.json';
    baseUrl = this.Url;



    constructor(private http:HttpClient, private route: ActivatedRoute){}
    public imgret;

    postFile(fileToUpload : File){
        const endpoint = 'http://d5b0d811.ngrok.io/api/UploadImage/dummy';
      
        const formData : FormData = new FormData();
        //formData.append('Id','1');
        //formData.append('name','Shreya');
        //formData.append('Email','shreya@gmail.com');
        //formData.append('Contact','2828282');
        formData.append('Image', fileToUpload,fileToUpload.name);
        return this.http.post(endpoint , formData);
      }
          
          
    }