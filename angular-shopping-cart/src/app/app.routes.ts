import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductList },
  { path: 'cart', component: Cart },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'products' }
];
