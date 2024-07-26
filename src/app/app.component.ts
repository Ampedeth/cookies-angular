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

  productsData: Product[] = [
    {
      image: "1.png",
      title: "Лучшие друзья",
      text: "Печенье, с которого все началось! Наше фирменное печенье с шоколадной крошкой и грецкими орехами хрустящее снаружи с достаточно толстой и липкой серединкой.",
      price: 20,
      basePrice: 20,
      weight: "2 шт./ 200 гр."
    },
    {
      image: "2.png",
      title: "Шоколадный француз",
      text: "Это печенье, изготовленное из тёмного французского какао и полусладкой шоколадной стружки, наверняка удовлетворит даже самого заядлого любителя шоколада.",
      price: 24,
      basePrice: 24,
      weight: "2 шт./ 200 гр."
    },
    {
      image: "3.png",
      title: "Овсянка с изюмом, Сэр!",
      text: "Это сдобное маслянистое печенье весом шесть унций каждое, золотисто-коричневое снаружи, влажное внутри и наполненное пухлым сладким изюмом.",
      price: 18,
      basePrice: 18,
      weight: "2 шт./ 200 гр."
    },
    {
      image: "4.png",
      title: "Шоколадное наслаждение",
      text: "Идеально хрустящее снаружи и достаточно густое и липкое в центре, это печенье наполнено полусладкой и тёмной шоколадной стружкой, придающей богатую глубину вкуса.",
      price: 24,
      basePrice: 24,
      weight: "2 шт./ 200 гр."
    },
    {
      image: "5.png",
      title: "Арахисовый рай",
      text: "Сладкое, пикантное и идеально сбалансированное печенье удовлетворяет тягу любителей арахисового масла и шоколада.",
      price: 20,
      basePrice: 20,
      weight: "2 шт./ 200 гр."
    },
    {
      image: "6.png",
      title: "Шоколадный ореховый деликатес",
      text: "Наша фирменная рецептура печенья с шоколадными крошками и грецкими орехами гарантирует незабываемый вкусовой опыт. Каждое печенье хрустит снаружи, но раскрывает внутри нежную сердцевину.",
      price: 18,
      basePrice: 18,
      weight: "2 шт./ 200 гр."
    },
    
    {
      image: "7.png",
      title: "Ассорти фирменного печенья",
      text: "Зачем выбирать один, когда можно получить их все? Наш классический ассортимент печенья включает в себя по одному из четырёх оригинальных вкусов печенья.",
      price: 36,
      basePrice: 36,
      weight: "4 шт./ 400 гр."
    },
    {
      image: "8.png",
      title: "Лимонное печенье",
      text: "Весна уже не за горами, но нам не терпелось подарить вам немного солнечного света: наше первое лимонное печенье. Это лакомство жевательное, лимонное, не слишком сладкое и даже немного… освежающее?",
      price: 33,
      basePrice: 33,
      weight: "4 шт./ 400 гр."
    },
    {
      image: "9.png",
      title: "Любители шоколада",
      text: "Вам больше не нужно выбирать фаворитов. Мы сделали этот набор для всех людей, которые действительно любят шоколад…",
      price: 38,
      basePrice: 38,
      weight: "4 шт./ 400 гр."
    },
    {
      image: "10.png",
      title: "Карамель и кокос",
      text: "Побалуйте себя кокосовым, маслянистым, карамельным печеньем, которое обладает невиданным ранее вкусом и текстурой. Наслаждение круглый год.",
      price: 33,
      basePrice: 33,
      weight: "4 шт./ 400 гр."
    },
    {
      image: "11.png",
      title: "Веганское с шоколадной крошкой",
      text: " Наше веганское безглютеновое печенье содержит кусочки хрустящих грецких орехов и полусладкую веганскую шоколадную стружку.",
      price: 39,
      basePrice: 39,
      weight: "4 шт./ 400 гр."
    },
    {
      image: "12.png",
      title: "Крем-брюле ореховое печенье",
      text: "НИспользуя уникальную смесь ингредиентов, мы создали печенье с кусочками крем-брюле и миндальными орехами, которое обещает неповторимые гастрономические ощущения. Каждый кусочек обладает хрустящей корочкой и тает во рту.",
      price: 35,
      basePrice: 35,
      weight: "4 шт./ 400 гр."
    },
  ]


  form = this.fb.group({
    product: ["",Validators.required],
    name: ["",Validators.required],
    phone: ["",Validators.required],
  });

  constructor(private fb: FormBuilder){

  }
 
  //Navigation
  
  // Function scroll to elements

  scrollTo(target: HTMLElement, product?: any){
    target.scrollIntoView({behavior: "smooth"});
    if (product) {
      this.form.patchValue({product: product.title + ' (' + product.price + ' ' + this.currency + ')'});
    }
  }

  //Scroll from products and paste product's name to input block  

  //   onProductClick(index: number): void {
  //     const productNameElements = document.getElementsByClassName("products-item-title") as HTMLCollectionOf<HTMLElement>;
  //     const orderElement = document.getElementById("order") as HTMLElement;
  //     const productInputElement = document.getElementById("product") as HTMLInputElement;

      
  //     if (orderElement && productInputElement && productNameElements[index]) {
  //       this.scrollTo(orderElement)
  //       productInputElement.value = productNameElements[index].innerText;
  //     }
  // }




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

      // for (let priceElement of Array.from(priceElements)) {
      //     const basePrice = parseFloat(priceElement = productsData[]);
      //     const convertedPrice = basePrice * exchangeRates[toCurrency];
      //     priceElement.textContent = `${convertedPrice.toFixed(2)} ${newCurrency}`;
      // }
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
    alert("Спасибо за заказ! Мы скоро свяжемся с вами!")
    this.form.reset();
  }
}

}
