<template>
    <nav class="navbar navbar-light bg-light fixed-top">
        <div class="navbar-text ms-auto d-flex me-3">
            <button
                class="btn btn-sm btn-outline-success"
                @click="$emit('toggle')">
                <FontAwesomeIcon :icon="['fa', 'dollar-sign']" />
            </button>

            <div class="ms-2 dropdown" v-if="cart.length > 0">
                <!-- button pen-trigger dropdown -->
                <button
                    class="btn btn-success btn-sm dropdown-toggle"
                    id="dropdownCart"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span class="badge rounded-pill text-bg-success">
                        {{ cartQty }}
                    </span>

                    <FontAwesomeIcon
                        :icon="['fa', 'shopping-cart']"
                        class="mx-2" />
                    <ProductPrice :value="Number(cartTotal)" />
                </button>

                <!-- menu dropdown yg ditrigger button di atas -->
                <div
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownCart">
                    <div v-for="(item, index) in cart" :key="index">
                        <div class="dropdown-item-text text-nowrap text-end">
                            <span
                                class="badge rounded-pill text-bg-warning me-1">
                                {{ item.qty }}
                            </span>
                            {{ item.product.title }}
                            <b>
                                {{
                                    (item.product.price * item.qty)
                                        | currencyFormat
                                        | thousandFormat
                                }}
                            </b>
                            <a
                                href="#"
                                class="badge bg-danger text-white text-decoration-none"
                                @click.stop="$emit('delete', index)">
                                -
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import ProductPrice from "./ProductPrice.vue";
    export default {
        name: "nav-bar",
        data: function () {
            return {};
        },
        components: {
            ProductPrice,
            FontAwesomeIcon,
        },
        props: ["cart", "cartQty", "cartTotal"],
        filters: {
            currencyFormat: function (value) {
                return "$" + Number.parseFloat(value).toFixed(2);
            },
            thousandFormat: function (value) {
                let strValue = value.toString();
                let counter = 1;
                for (let i = strValue.indexOf(".") - 1; i > 1; i--) {
                    if (counter % 3 === 0) {
                        const leftString = strValue.slice(0, i);
                        const rightString = strValue.slice(i);
                        strValue = leftString + "," + rightString;
                    }
                    counter++;
                }
                return strValue;
            },
        },
    };
</script>
