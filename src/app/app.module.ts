import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRouting } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListComponent } from './list/list.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { LogoutComponent } from './logout/logout.component';
import { ApiService } from './api.service';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    ListComponent,
    ModalFormComponent,
    LogoutComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,AppRouting,FormsModule,HttpClientModule,NgbModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents:[ModalFormComponent]
})
export class AppModule { }
