import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  goToRegisterPage() {
    const link = 'https://docs.google.com/forms/d/e/1FAIpQLSfOSZloaIxzvoaSQLvSL_Pt5kqTKZzJ8dZeRYXCHvJk-R9kgg/viewform?usp=sf_link'
    window.open(link, '_blank')
  }

  openWhatsApp(value: any) {
    switch (value) {
      case 1:
        window.open(this.getWhatsappLink('7995544085'), '_blank')
        break
      case 2:
        window.open(this.getWhatsappLink('8431822071'), '_blank')
        break
      case 3:
        window.open(this.getWhatsappLink('7013802227'), '_blank')
    }
  }

  getWhatsappLink(number: String) {
    return `https://api.whatsapp.com/send/?phone=91${number}&text&app_absent=0`
  }

}
