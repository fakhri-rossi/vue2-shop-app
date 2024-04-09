<template>
    <div>
        <NavBar
            :cart="cart"
            :cartQty="cartQty"
            :cartTotal="cartTotal"
            @toggle-slide="toggleSlider"
            @add-item="addItem"
            @delete-item="deleteItem" />
        <h1>My Shop</h1>
        <PriceSlider :maximum.sync="maximum" :sliderStatus="sliderStatus" />
        <ProductCatalog
            :products="products"
            :maximum="maximum"
            @add-item="addItem" />
    </div>
</template>

<script>
    import ProductCatalog from "./ProductCatalog.vue";
    import PriceSlider from "./PriceSlider.vue";
    import NavBar from "./NavBar.vue";

    export default {
        name: "PageProducts",
        props: [
            "products",
            "maximum",
            "cart",
            "cartTotal",
            "cartQty",
            "sliderStatus",
            "sliderState",
        ],
        components: {
            NavBar,
            PriceSlider,
            ProductCatalog,
        },
        methods: {
            toggleSlider: function () {
                this.$emit("toggle");
            },
            addItem: function (item) {
                this.$emit("add", item);
            },
            deleteItem: function (index) {
                this.$emit("delete", index);
            },
        },
    };
</script>
