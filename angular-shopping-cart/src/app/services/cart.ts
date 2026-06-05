import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Cart state using Signals
  readonly items = signal<CartItem[]>([]);

  // Computed properties
  readonly totalItems = computed(() =>
    this.items().reduce((acc, item) => acc + item.quantity, 0)
  );

  readonly totalPrice = computed(() =>
    this.items().reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  );

  // Add Item to Cart
  addToCart(product: Product, quantity = 1): void {
    this.items.update((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...currentItems, { product, quantity }];
    });
  }

  // Remove Item from Cart
  removeFromCart(productId: number): void {
    this.items.update((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  }

  // Update Item Quantity
  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.items.update((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  // Clear Cart
  clearCart(): void {
    this.items.set([]);
  }
}
