// miniprogram/pages/home/home.js
const db = wx.cloud.database({
  env: "storestore-bpjc3"
})
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

    db.collection("product").get().then(result => {
      wx.hideLoading()

      const productList = result.data
      // 2 digits for price
      productList.forEach(product => product.price = parseFloat(Math.round(product.price * 100) / 100).toFixed(2))

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