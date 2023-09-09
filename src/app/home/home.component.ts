import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    let cart: any = localStorage.getItem('cart');
    if (cart) this.cart = JSON.parse(cart);
    let items: any = localStorage.getItem('items');
    if (items) this.items = JSON.parse(items);
  }

  cart: any = [];

  items: any = [
    { id: 'BQ23', name: 'item1', count: 1, isAdded: false },
    { id: 'BE81', name: 'item2', count: 1, isAdded: false },
    { id: 'AR09', name: 'item3', count: 1, isAdded: false },
    { id: 'SK47', name: 'item4', count: 1, isAdded: false },
  ];
  changeCount(change: any, id: string) {
    switch (change) {
      case 'add':
        this.items = this.items.map((elem: any) => {
          if (elem['id'] == id) {
            var item = elem;
            item.count = item.count + 1;
            return item;
          } else return elem;
        });
        break;
      case 'remove':
        this.items = this.items.map((elem: any) => {
          if (elem['id'] == id) {
            var item = elem;
            if (item.count > 1) item.count = item.count - 1;
            return item;
          } else return elem;
        });
        break;
    }
  }
  addToCart(item: any) {
    var itemToBeAdded = item;
    for (let elem of this.cart) {
      if (elem.id == item.id) return console.log(this.cart);
    }
    this.items = this.items.map((elem: any) => {
      if (elem.id == itemToBeAdded.id) {
        var item = elem;
        item.isAdded = true;
        return item;
      } else return elem;
    });
    this.cart.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('items', JSON.stringify(this.items));

    console.log(this.cart);
  }
}
