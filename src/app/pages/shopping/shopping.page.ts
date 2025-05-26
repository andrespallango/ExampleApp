import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';
import { IonFab, IonFabButton, IonIcon, IonBadge, IonModal, IonButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    IonFab,
    IonFabButton,
    IonIcon,
    IonBadge,
    IonModal,
    IonButton,
    IonButtons,
    IonList,
    IonItem,
    IonLabel,
    IonNote
  ]
})
export class ShoppingPage implements OnInit {
  products = [
    {
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 100,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 150,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    }
  ];
  cart: any[] = [];
  cartModalOpen = false;
  purchaseComplete = false;

  constructor() { }

  ngOnInit() {
  }

  addToCart(product: any) {
    const found = this.cart.find(item => item.name === product.name);
    if (found) {
      found.qty += product.qty;
    } else {
      this.cart.push({ ...product });
    }
    product.qty = 1;
  }

  increaseQty(item: any) {
    item.qty++;
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
    } else {
      this.removeFromCart(item);
    }
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(i => i.name !== item.name);
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  openCart() {
    this.cartModalOpen = true;
    this.purchaseComplete = false;
  }

  closeCart() {
    this.cartModalOpen = false;
  }

  pay() {
    this.purchaseComplete = true;
    this.cart = [];
  }
}
