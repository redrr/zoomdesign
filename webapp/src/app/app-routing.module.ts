import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./frontoffice/home/home.component";
import {ProjectPageComponent} from "./frontoffice/project-page/project-page.component";
import {LoginComponent} from "./backoffice/login/login.component";
import {BannerTableComponent} from "./backoffice/banners/banner-table/banner-table.component";
import {BannerComponent} from "./backoffice/banners/banner/banner.component";
import {ProjectTableComponent} from "./backoffice/projects/project-table/project-table.component";
import {ProjectComponent} from "./backoffice/projects/project/project.component";
import {ProjectPartTableComponent} from "./backoffice/project-parts/project-part-table/project-part-table.component";
import {ProjectPartComponent} from "./backoffice/project-parts/project-part/project-part.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "projects/:id",
    component: ProjectPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "banners",
    component: BannerTableComponent
  },
  {
    path: "banner/new",
    component: BannerComponent
  },
  {
    path: "projects",
    component: ProjectTableComponent
  },
  {
    path: "project/new",
    component: ProjectComponent
  },
  {
    path: "project/:id/parts",
    component: ProjectPartTableComponent
  },
  {
    path: "project/:id/part/new",
    component: ProjectPartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
