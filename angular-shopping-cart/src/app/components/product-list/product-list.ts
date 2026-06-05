import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartService, Product } from '../../services/cart';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Happy Shopping - SkyCart');
  }

  // List of premium light blue and white themed products
  readonly products: Product[] = [
    {
      id: 1,
      name: 'AeroPro Wireless Keyboard',
      price: 129.99,
      description: 'Sleek mechanical keyboard with quiet linear switches, soft sky-blue backlighting, and a premium white housing.',
      image: 'keyboard.png',
      rating: { rate: 4.8, count: 124 },
      category: 'Workspace',
    },
    {
      id: 2,
      name: 'Sky Ergonomic Chair',
      price: 349.99,
      description: 'Breathable pastel-blue mesh backrest with white frame, 3D adjustable armrests, and dynamic lumbar support.',
      image: 'chair.png',
      rating: { rate: 4.9, count: 86 },
      category: 'Furniture',
    },
    {
      id: 3,
      name: 'Horizon Curved Monitor',
      price: 499.99,
      description: '34-inch curved ultrawide display with a stunning white chassis and blue-light filter, perfect for immersive work.',
      image: 'monitor.png',
      rating: { rate: 4.7, count: 53 },
      category: 'Electronics',
    },
    {
      id: 4,
      name: 'SonicWave ANC Headphones',
      price: 199.99,
      description: 'Premium active noise-cancelling headphones in matte white with pale blue accents, featuring high-fidelity sound.',
      image: 'headphones.png',
      rating: { rate: 4.6, count: 210 },
      category: 'Audio',
    },
  ];

  // Helper method to add product to cart
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
