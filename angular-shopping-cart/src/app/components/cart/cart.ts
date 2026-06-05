import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  protected readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Your Shopping Bag - SkyCart');
  }

  // Increment item quantity
  incrementQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
  }

  // Decrement item quantity
  decrementQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity - 1);
  }

  // Remove item from cart
  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.product.id);
  }

  // Clear all items
  clearCart(): void {
    this.cartService.clearCart();
  }

  // Trigger dummy checkout
  checkout(): void {
    const total = this.cartService.totalPrice().toFixed(2);
    alert(`🎉 Order Placed Successfully!\n\nTotal Amount: Rs. ${total}\n\nThank you for choosing SkyCart! Your order will be processed shortly.`);
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }
}
