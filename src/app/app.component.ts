import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

interface Product {
  image: string;
  title: string;
  text: string;
  price: number;
  basePrice: number;
  weight: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  currency = '$';

  productsData: any;


  form = this.fb.group({
    product: ["",Validators.required],
    name: ["",Validators.required],
    phone: ["",Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient){

  }

  ngOnInit(){
    this.http.get("https://testologia.ru/cookies").subscribe(data => this.productsData = data)
  }
 
  //Navigation
  
  // Function scroll to elements

  scrollTo(target: HTMLElement, product?: any){
    target.scrollIntoView({behavior: "smooth"});
    if (product) {
      this.form.patchValue({product: product.title + ' (' + product.price + ' ' + this.currency + ')'});
    }
  }

  // Currency settings 


  async fetchExchangeRates(): Promise<{ [key: string]: number }> {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    return data.rates;
  }

// Function to convert and display the price

  async convertCurrency(toCurrency: string, newCurrency: string) {
    const exchangeRates = await this.fetchExchangeRates();
    const priceElements = document.getElementsByClassName("products-item-price")

    Array.from(priceElements).forEach(priceElement => {
        const productItem = priceElement.closest('.products-item') as HTMLElement;
        const index = Array.from(document.getElementsByClassName("products-item")).indexOf(productItem);
        if (index !== -1) {
            const basePrice = this.productsData[index].basePrice;
            const convertedPrice = basePrice * exchangeRates[toCurrency];
            priceElement.textContent = `${convertedPrice.toFixed()} ${newCurrency}`;
        }
    });
  }

  async changeCurrency() {

    let newCurrency = '$';
    let targetCurrency = 'USD';

    if (this.currency === '$') {
        newCurrency = '₽';
        targetCurrency = 'RUB';
    } else if (this.currency === '₽') {
        newCurrency = 'BYN';
        targetCurrency = 'BYN';
    } else if (this.currency === 'BYN') {
        newCurrency = '€';
        targetCurrency = 'EUR';
    } else if (this.currency === '€') {
        newCurrency = '¥';
        targetCurrency = 'CNY';
    } else if (this.currency === '¥') {
        newCurrency = '₴';
        targetCurrency = 'UAH';
    }

    this.currency = newCurrency;

    // Convert and update the prices
    await this.convertCurrency(targetCurrency, newCurrency);
  }





  confirmOrder(){
    if(this.form.valid){
      this.http.post("https://testologia.ru/cookies-order", this.form.value)
      .subscribe({
        next: (response: any) => {
          alert(response.message);
          this.form.reset();
        },
        error: (response: any) => {
          alert(response.error.message);
        }
      });
    }
  }
 
}
