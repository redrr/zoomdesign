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
import {SecurityGuardService} from "./services/security-guard.service";

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
    component: BannerTableComponent,
    canActivate: [SecurityGuardService]
  },
  {
    path: "banner/new",
    component: BannerComponent,
    canActivate: [SecurityGuardService]
  },
  {
    path: "banner/edit/:id",
    component: BannerComponent,
    canActivate: [SecurityGuardService]
  },
  {
    path: "projects",
    component: ProjectTableComponent,
    canActivate: [SecurityGuardService]
  },
  {
    path: "project/new",
    component: ProjectComponent,
    canActivate: [SecurityGuardService]
  },
  {
    path: "project/edit/:id",
    component: ProjectComponent,
    canActivate: [SecurityGuardService]
  },
  {
    path: "project/:id/parts",
    component: ProjectPartTableComponent,
    canActivate: [SecurityGuardService]
  },
  {
    path: "project/:project_id/part/new",
    component: ProjectPartComponent,
    canActivate: [SecurityGuardService]
  },
  {
    path: "project/:project_id/part/edit/:id",
    component: ProjectPartComponent,
    canActivate: [SecurityGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
