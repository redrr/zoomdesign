import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontoffice/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './frontoffice/common/header/header.component';
import { FooterComponent } from './frontoffice/common/footer/footer.component';
import { LoginComponent } from './backoffice/login/login.component';
import { BannerComponent } from './backoffice/banners/banner/banner.component';
import { BannerTableComponent } from './backoffice/banners/banner-table/banner-table.component';
import { ProjectTableComponent } from './backoffice/projects/project-table/project-table.component';
import { ProjectPartComponent } from './backoffice/project-parts/project-part/project-part.component';
import { ProjectPartTableComponent } from './backoffice/project-parts/project-part-table/project-part-table.component';
import { ProjectPageComponent } from './frontoffice/project-page/project-page.component';
import {ProjectComponent} from "./backoffice/projects/project/project.component";
import { AdminHeaderComponent } from './backoffice/admin-header/admin-header.component';
import { LoadingPageComponent } from './frontoffice/loading-page/loading-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BannerComponent,
    BannerTableComponent,
    ProjectTableComponent,
    ProjectPartComponent,
    ProjectPartTableComponent,
    ProjectPageComponent,
    AdminHeaderComponent,
    LoadingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
