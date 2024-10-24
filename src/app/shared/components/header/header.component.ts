import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  lang: any='en';

  constructor(private translate: TranslateService){
    this.lang = this.translate.currentLang
    console.log(this.translate.currentLang)
  }

  changeLanguage(){
    if(this.lang == 'en'){
      localStorage.setItem('langauge', 'ar');
    }else{
      localStorage.setItem('langauge', 'en');
    }
    window.location.reload()
  }

}
