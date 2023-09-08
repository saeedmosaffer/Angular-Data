import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './posts/details/details.component';
import { AdminComponent } from './admin/admin.component';
import {GuardService} from "./guard.service";
import {PostService} from "./post.service";
import { HomeComponent } from './home/home.component';
import {LazyLoadImageModule} from "ng-lazyload-image";
import { PlaceholderComponent } from './placeholder/placeholder.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailsComponent,
    AdminComponent,
    HomeComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule
  ],
  providers: [GuardService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
