import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
