// miniprogram/pages/home/home.js
Page({
  data: {
    productList: [{
      id: 1,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product1.jpg',
      name: 'Wallet',
      price: 100,
      source: 'CHINA',
    }, {
      id: 2,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product2.jpg',
      name: 'Guitar',
      price: 200,
      source: 'SWEDEN',
    }, {
      id: 3,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product3.jpg',
      name: 'Stapler',
      price: 300,
      source: 'GERMANY',
    }, {
      id: 4,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product4.jpg',
      name: 'Leafy vegetables',
      price: 400,
      source: 'NEW ZEALAND',
    }, {
      id: 5,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product5.jpg',
      name: 'Compass',
      price: 500,
      source: 'USA',
    }] // Products List
  }
})