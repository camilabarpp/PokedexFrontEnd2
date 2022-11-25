import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { PagesRoutingModule } from './page-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
    declarations: [HomeComponent, DetailsComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class PagesModule { }
