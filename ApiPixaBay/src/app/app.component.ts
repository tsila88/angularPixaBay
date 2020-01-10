import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GalleryService } from "src/services/gallery.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ApiPixaBay";

 

  constructor(
  ) {}

  ngOnInit() {}

  
}
