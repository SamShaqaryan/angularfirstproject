import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './blog/blog.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    BlogComponent,
    SliderComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
