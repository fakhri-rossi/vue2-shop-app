<template>
    <transition
        name="custom"
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp">
        <div v-if="sliderStatus">
            <div class="align-items-center py-3" :class="sliderState">
                <label class="fw-bold me-2">Maximum Price</label>
                <span class="d-inline ps-3 pe-2">$</span>
                <input
                    type="number"
                    name=""
                    id=""
                    class="form-control mx-2"
                    style="width: 10%; text-align: center"
                    v-model="maxAmount"
                    @change="$emit('update:maximum', maxAmount)" />
                <input
                    type="range"
                    name=""
                    id=""
                    class="form-range"
                    min="0"
                    max="5000"
                    v-model="maxAmount"
                    @input="$emit('update:maximum', maxAmount)" />
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "price-slider",
        props: ["sliderStatus", "maximum"],
        data: function () {
            return {
                maxAmount: 3000,
            };
        },
        computed: {
            sliderState: function () {
                return this.sliderStatus ? "d-flex" : "d-none";
            },
        },
    };
</script>

<style>
    .animate__fadeInDown,
    .animate__fadeOutUp {
        --animate-duration: 0.4s;
    }

    .animate__fadeInRight,
    .animate__fadeOutRight {
        --animate-duration: 0.5s;
    }
</style>
