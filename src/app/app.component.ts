import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  lang:any;

  constructor(private translate: TranslateService) {
    if('langauge' in localStorage){
      this.translate.addLangs(['ar', 'en']);
      this.lang = localStorage.getItem('langauge')
      this.translate.use(this.lang);
    }else{
      this.translate.use(this.translate.defaultLang);
    }
  }
}
