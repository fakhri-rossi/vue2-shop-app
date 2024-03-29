<template>
    <span>{{
        (this.prefix + Number.parseFloat(this.value).toFixed(this.precision))
            | thousandFormat
    }}</span>
</template>

<script>
    export default {
        name: "product-price",
        props: {
            value: Number,
            prefix: {
                type: String,
                default: "$",
            },
            precision: {
                type: Number,
                default: 2,
            },
        },
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
