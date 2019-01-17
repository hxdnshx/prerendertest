<template>
    <el-button v-on:click="nextroute">{{routetxt}}</el-button>
</template>

<script>
    import Vue from 'vue';
    import { Button } from 'element-ui'
    Vue.use(Button);

    export default {
        name: "RouteInfoTest",
        data: function () {
            return {
                result: 10
            }
        },
        computed: {
            routetxt: function () {
                return this.$route.params.id + this.result;
            }
        },
        methods: {
            nextroute: function () {
                this.$router.push({ name: "TestRoute", params: { id: this.$route.params.id + 1 }});
            }
        }
    }
</script>

<style scoped>

</style>