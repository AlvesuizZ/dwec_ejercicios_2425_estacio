import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';

import { NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChildComponent,
    CommentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
