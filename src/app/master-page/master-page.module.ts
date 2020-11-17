import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HomeComponent,
    SidenavMenuComponent,
    TopMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MasterPageModule { }
