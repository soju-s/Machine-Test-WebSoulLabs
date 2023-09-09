import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    let data: any = localStorage.getItem('cart');
    this.cart = JSON.parse(data);
    let items: any = localStorage.getItem('items');
    if (items) this.items = JSON.parse(items);
  }
  cart: any = [];
  items: any = [];
  removeItem(id: any) {
    this.cart = this.cart.filter((elem: any) => elem.id !== id);
    this.items = this.items.map((elem: any) => {
      if (elem.id == id) {
        let item = elem;
        item.count = 1;
        item.isAdded = false;
        return item;
      } else return elem;
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('items', JSON.stringify(this.items));
  }

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
        this.cart = this.cart.map((elem: any) => {
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
        this.cart = this.cart.map((elem: any) => {
          if (elem['id'] == id) {
            var item = elem;
            if (item.count > 1) item.count = item.count - 1;
            return item;
          } else return elem;
        });
        break;
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
