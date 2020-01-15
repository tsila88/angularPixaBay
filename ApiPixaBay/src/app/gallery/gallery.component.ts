import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GalleryService } from "src/services/gallery.service";
import { from } from "rxjs";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  motCle: string = "";
  datas: any;
  currentPage: number = 1;
  size: number = 10;
  pages:Array<number>=[];
  pagesLenght: number;
  totalPages:number;
  totalPages1:number;
  
  constructor(
    public activedRoute: ActivatedRoute,
    public galleryService: GalleryService
  ) {}

  ngOnInit() {}

  onSearch(dataForm) {
    this.galleryService
      .searchByMotCle(this.motCle, this.size,this.currentPage)
      .subscribe(
        data => {
          this.datas = data;
          console.log("Search mot clé: " + this.motCle);
          console.log("Get datas from the Api");
          console.log(data);
          this.totalPages = this.datas.totalHits/this.size;
          this.pages=new Array(this.totalPages);
          this.totalPages1 = this.datas.totalHits;
        },
        err => console.error(err)
      );
  }

  goTopage(i:number){
    this.currentPage=i+1;
    this.onSearch({motCle:this.motCle});
  }
}
