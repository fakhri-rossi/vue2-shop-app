<template>
    <div>
        <h1>Checkout</h1>
        <table class="table table-hover" v-if="cart.length">
            <caption class="text-end h3">
                <b class="text-secondary">Total: </b>
                <ProductPrice
                    class="d-block text-success fw-light"
                    :value="Number(cartTotal)" />
            </caption>
            <thead>
                <tr class="">
                    <th scope="col"></th>
                    <th scope="col">Item</th>
                    <th scope="col" class="text-end">Qty</th>
                    <th scope="col" class="text-center">Price</th>
                    <th scope="col" class="text-center">Sub Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="item.product.id">
                    <td class="text-center">
                        <div class="btn-group">
                            <button
                                @click="$emit('add', item.product)"
                                class="btn btn-info">
                                +
                            </button>
                            <button
                                @click="$emit('delete', index)"
                                class="btn btn-outline-info">
                                -
                            </button>
                        </div>
                    </td>
                    <th scope="row">
                        {{ item.product.brand }} {{ item.product.title }}
                    </th>
                    <th class="text-center">{{ item.qty }}</th>
                    <th class="text-right">{{ Number(item.product.price) }}</th>
                    <th class="text-right">
                        {{ Number(item.product.price * item.qty) }}
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import ProductPrice from "./ProductPrice.vue";
    export default {
        name: "checkout",
        props: ["cart", "cartTotal"],
        components: {
            ProductPrice,
        },
    };
</script>
