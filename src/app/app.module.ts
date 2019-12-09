import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NumOneComponent } from './componenta/num-one/num-one.component';
import { NumTwoComponent } from './componenta/num-two/num-two.component';
import { OnePerentComponent } from './componenta/one-perent/one-perent.component';
import { FooterComponent } from './componenta/footer/footer.component';
import { FormComponent } from './componenta/form/form.component';
import { BussService } from './services/buss.service';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NumOneComponent,
    NumTwoComponent,
    OnePerentComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BussService],
  bootstrap: [AppComponent],

})
export class AppModule { }
