// miniprogram/pages/home/home.js
const db = require("../../utils/db.js") // this replaces the lines below
// const db = wx.cloud.database({
//   env: "storestore-bpjc3"
// })
const util = require("../../utils/util.js")

Page({
  data: {
    productList: [],
  },

  onLoad: function(options) {
    this.getProductList()
  },
  
  getProductList() {
    wx.showLoading({
      title: "Still Loading...",
    })

    db.getProductList().then(result => {
      wx.hideLoading()

      const productList = result.data
      // 2 digits for price
      productList.forEach(product => product.price = util.formatPrice(product.price))

      if (productList.length) {
        this.setData({
          productList
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()
    })
  },
})