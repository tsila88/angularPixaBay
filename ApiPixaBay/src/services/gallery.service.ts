import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class GalleryService {

    constructor(public http: HttpClient) {

    }

    searchByMotCle(motCle:string,size:number,currentPage:number){
        
        return this.http.get("https://pixabay.com/api/?key=14869096-2c4d82057c5debc0ae59dbe73&q="+motCle+"&image_type=photo&pretty=true&page="+currentPage+"&per_page="+size);

    }
} 