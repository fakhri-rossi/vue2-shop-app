<template>
    <div id="app" class="container mt-5">
        <PageProducts
            :cart="cart"
            :cartQty="cartQty"
            :cartTotal="cartTotal"
            :maximum.sync="maximum"
            :products="products"
            :sliderStatus="sliderStatus"
            @toggle="toggleSliderStatus"
            @add="addItem"
            @delete="deleteItem" />
    </div>
</template>

<script>
    import PageProducts from "./components/PageProducts.vue";

    export default {
        name: "App",
        data: function () {
            return {
                maximum: 3000,
                products: [],
                cart: [],
                sliderStatus: false,
            };
        },
        components: {
            PageProducts,
        },
        mounted: function () {
            // fetch('https://hplussport.com/api/products/order/price')
            fetch("https://dummyjson.com/products")
                .then((response) => response.json())
                .then((data) => {
                    this.products = data.products;
                    console.log(data);
                });
        },
        methods: {
            addItem: function (product) {
                let productIndex;
                let productExist = this.cart.filter(function (item, index) {
                    if (item.product.id == Number(product.id)) {
                        productIndex = index;
                        return true;
                    } else {
                        return false;
                    }
                });
                if (productExist.length) {
                    this.cart[productIndex].qty++;
                    console.log(productExist);
                } else {
                    this.cart.push({ product: product, qty: 1 });
                }
            },
            deleteItem: function (index) {
                if (this.cart[index].qty > 1) {
                    this.cart[index].qty--;
                } else {
                    this.cart.splice(index, 1);
                }
            },
            toggleSliderStatus: function () {
                this.sliderStatus = !this.sliderStatus;
            },
        },
        computed: {
            cartTotal: function () {
                let sum = 0;
                for (let key in this.cart) {
                    sum =
                        sum + this.cart[key].product.price * this.cart[key].qty;
                }
                return sum;
            },
            cartQty: function () {
                let qty = 0;
                for (let key in this.cart) {
                    qty = qty + this.cart[key].qty;
                }
                return qty;
            },
        },
    };
</script>
