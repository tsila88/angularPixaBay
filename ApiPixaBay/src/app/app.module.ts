import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { GalleryService } from 'src/services/gallery.service';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/:motCle', component: GalleryComponent},
  {path: '**', redirectTo:'/about',pathMatch:'full'}
] 
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})


export class AppModule { }
