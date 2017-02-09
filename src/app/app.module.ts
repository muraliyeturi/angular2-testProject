import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ModalModule } from 'ng2-bootstrap';

import { pdpComponent } from './pdp/app.component';

@NgModule({
  declarations: [
    pdpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [pdpComponent]
})
export class AppModule { }
