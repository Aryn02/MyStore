export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h4d/33080093343774/apple-iphone-se-2020-64gb-slim-box-krasnyj-100692722-1-Container.jpg',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image: 'kjkn',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    image: 'kjkn',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
