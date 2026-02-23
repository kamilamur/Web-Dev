import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'White powder sweater',
      description: 'Sweater 30052753 stylish and universal, female',
      price: 2478,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/p9e/87501686.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p07/p9b/87501687.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p07/p9b/87501687.jpeg?format=gallery-medium',
      ],
      link: 'https://l.kaspi.kz/shop/BXiC3HoHWBGm4S7'
    },
    {
      id: 2,
      name: 'Sweater NA & Ami',
      description: 'Black female sweater',
      price: 7990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pd1/98677488.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb5/pd1/98677488.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb5/pd1/98677488.jpeg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/FsdEF4GrZPcDTdm'
    },
    {
      id: 3,
      name: 'Light gray sweater',
      description: 'Light gray female sweater suitable for lean and tall women',
      price: 1998,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/p9d/12215480.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p30/p9d/12215480.jpeg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/3mcwRAYYDjR7nXs'
    },
    {
      id: 4,
      name: 'Female sweater Khaki',
      description: 'Unusual color amazing sweater',
      price: 2147,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p95/p66/17249053.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p95/p66/17249053.jpeg?format=gallery-medium',
      ],
      link: 'https://l.kaspi.kz/shop/GjzghY9hLBD3L1f'
    },
    {
      id: 5,
      name: 'White sweater ',
      description: 'Affordable',
      price: 2688,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9b/pc8/94518795.bin?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/pc8/94518798.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pec/94518803.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/pec/94518800.bin?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/8q8cGVbTLAhLPnE'
    },
    {
      id: 6,
      name: 'White sweater A_Tomy',
      description: 'Stylish female sweater',
      price: 3129,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hb8/87181694173214.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hda/hb8/87181694173214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/h1b/87181694304286.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/AFtc5Hqnm18V2yS'
    },
    {
      id: 7,
      name: 'Sweater MUA black',
      description: 'Female sweater',
      price: 4900,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p26/p69/61130982.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p26/p69/61130982.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p15/p58/61130987.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p2d/61131005.jpeg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/512WdHoVhh2W4rT'
    },
    {
      id: 8,
      name: 'Sweater Brown',
      description: 'Female sweater brown color cheap and qualitative',
      price: 1846,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7d/p74/12215402.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p74/12215402.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p74/12215402.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/6vpW1jAp55zr5UX'
    },
    {
      id: 9,
      name: 'Sweater DMA Female Gray',
      description: 'Female sweater',
      price: 4496,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe6/p40/74265140.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe6/p40/74265140.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p3d/74265154.jpg?format=gallery-medium',
      ],
      link: 'https://l.kaspi.kz/shop/CsAMMRp2zZw8vic'
    },
    {
      id: 10,
      name: 'Sweater "Ak-Deniz',
      description: 'Female black and white comfortable sweater',
      price: 3999,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7b/p91/8856175.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p35/8856181.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p11/p8e/8856176.jpeg?format=gallery-medium',
      ],
      link: 'https://l.kaspi.kz/shop/DGEtpXbEyGC98r2'
    }
  ];

  getStars(rating: number): number[] {
    const full = Math.round(rating); 
    return Array.from({ length: 5 }, (_, i) => (i < full ? 1 : 0));
  }
  getWhatsappShareUrl(product: Product): string {
    const text = `Check out this product: ${product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  getTelegramShareUrl(product: Product): string {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}