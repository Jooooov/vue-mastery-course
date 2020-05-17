var app = new Vue({
  el: '#app',
  data: {
    onSale:false,
    brand:"VueMastery",
    product:"Socks",
    selectedVariant:0,
    details:["80% cotton","20% poliester"],
    variants:[
      {variantID: 1,
        variantColor:"green",
      variantImage:"./Images/vmSocks-green-onWhite.jpg",
    variantQuantity:10},
      {variantID:2,
        variantColor:"blue",
      variantImage:"./Images/vmSocks-blue-onWhite.jpg",
    variantQuantity:0}],
    cart:0,
  },
  methods: {
    addToCart: function(){
      this.cart += 1
    },
    updateProduct(index){
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed: {
    title(){
      return this.brand+' ' +this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
  if (this.onSale) {
    return this.brand + ' ' + this.product + ' are on sale!'
  }
    return  this.brand + ' ' + this.product + ' are not on sale'
}
}
})
