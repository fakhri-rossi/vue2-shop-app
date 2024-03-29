<template>
    <transition-group
        name="custom"
        tag="div"
        @beforeEnter="before"
        @enter="enter"
        @leave="leave">
        <div
            class="row d-none mb-3 align-items-center"
            v-for="(item, index) in showItem"
            :key="item.id"
            :data-index="index">
            <div class="col-auto">
                <button class="btn btn-info" @click.stop="$emit('add', item)">
                    +
                </button>
            </div>
            <div class="col-3">
                <img
                    class="img-fluid"
                    :src="item.images[2]"
                    :alt="item.brand" />
            </div>
            <div class="col">
                <h3 class="text-info">{{ item.brand }} {{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <div class="h5 float-end">
                    <ProductPrice :value="Number(item.price)" />
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>
    import ProductPrice from "./ProductPrice.vue";
    export default {
        name: "product-catalog",
        components: {
            ProductPrice,
        },
        props: ["products", "maximum"],
        computed: {
            showItem: function () {
                // perlu di-declare variablenya, krn scope filter ga sampe ke thi.maximum
                let max = this.maximum;
                return this.products.filter(function (item) {
                    return item.price <= max;
                });
            },
        },
        methods: {
            before: function (el) {
                el.className = "d-none";
            },
            enter: function (el) {
                var delay = el.dataset.index * 100;
                setTimeout(function () {
                    el.className =
                        "row d-flex mb-3 align-items-center animate__animated animate__fadeInRight";
                }, delay);
            },
            leave: function (el) {
                var delay = el.dataset.index * 100;
                setTimeout(function () {
                    el.className =
                        "row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight";
                }, delay);
            },
        },
    };
</script>
