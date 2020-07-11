// cloud-based functionalities
const db = wx.cloud.database({
  env: "storestore-bpjc3"
})

// facilitate imports
module.exports = {
  // to access the database
  getProductList(){
    return db.collection("product").get()
  },

  // to access product details
  getProductDetail(id){
    return wx.cloud.callFunction({
      name: "productDetail",
      data: {
        id: id
      }
    })
  },
}