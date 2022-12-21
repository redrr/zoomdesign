import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminHeaderComponent} from "./backoffice/admin-header/admin-header.component";
import {BannerComponent} from "./backoffice/banners/banner/banner.component";
import {BannerTableComponent} from "./backoffice/banners/banner-table/banner-table.component";
import {LoginComponent} from "./backoffice/login/login.component";
import {ProjectPartComponent} from "./backoffice/project-parts/project-part/project-part.component";
import {ProjectPartTableComponent} from "./backoffice/project-parts/project-part-table/project-part-table.component";
import {ProjectComponent} from "./backoffice/projects/project/project.component";
import {ProjectTableComponent} from "./backoffice/projects/project-table/project-table.component";
import {HeaderComponent} from "./frontoffice/common/header/header.component";
import {FooterComponent} from "./frontoffice/common/footer/footer.component";
import {HomeComponent} from "./frontoffice/home/home.component";
import {LoadingPageComponent} from "./frontoffice/loading-page/loading-page.component";
import {ProjectPageComponent} from "./frontoffice/project-page/project-page.component";
import {ShareIconsModule} from "ngx-sharebuttons/icons";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";
import {ShareButtonModule} from "ngx-sharebuttons/button";
import {WelcomePageComponent} from "./frontoffice/welcome-page/welcome-page.component";

@NgModule({
  declarations: [
    AppComponent,

    AdminHeaderComponent,
    LoginComponent,
    BannerComponent,
    BannerTableComponent,
    ProjectComponent,
    ProjectTableComponent,
    ProjectPartComponent,
    ProjectPartTableComponent,

    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoadingPageComponent,
    ProjectPageComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareButtonsModule,
    ShareButtonModule,
    ShareIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
