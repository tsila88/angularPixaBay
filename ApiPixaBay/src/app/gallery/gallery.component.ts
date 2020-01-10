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
  size: number;
  pages:Array<number>=[];
  totalPages:number;
  
  constructor(
    public activedRoute: ActivatedRoute,
    public galleryService: GalleryService
  ) {}

  ngOnInit() {}

  onSearch() {
    this.galleryService
      .searchByMotCle(this.motCle,this.currentPage, this.size)
      .subscribe(
        data => {
          this.datas = data;
          console.log("Search mot clé: " + this.motCle);
          console.log("Get datas from the Api");
          console.log(data);
          this.totalPages = this.datas.totalHits/this.size;

          if (this.datas.totalHits % this.size != 0 ) ++this.totalPages;
          this.pages=new Array(this.totalPages);
        },
        err => console.error(err)
      );
  }
}
