//  helper functions
module.exports = {
  formatPrice(price) {
    return parseFloat(Math.round(price * 100) / 100).toFixed(2)
  }
}