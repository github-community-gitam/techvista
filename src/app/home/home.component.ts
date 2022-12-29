import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToRegisterPage() {
    const link = 'https://docs.google.com/forms/d/e/1FAIpQLSfOSZloaIxzvoaSQLvSL_Pt5kqTKZzJ8dZeRYXCHvJk-R9kgg/viewform?usp=sf_link'
    window.open(link, '_blank')
  }

  openWhatsApp(value: any) {
    switch (value) {
      case 1:
        window.open(this.getWhatsappLink('9618763917'), '_blank')
        break;
      case 2:
        window.open(this.getWhatsappLink('7993580626'), '_blank')
        break;
    }
  }

  getWhatsappLink(number: String) {
    return `https://api.whatsapp.com/send/?phone=91${number}&text&app_absent=0`
  }

}
