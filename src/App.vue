<script setup>
    import SearchPersonInfo from "./pages/SearchPersonInfo.vue";
</script>

<template>
    <div class="wrapper">
        <SearchPersonInfo/>
    </div>
</template>

<style scoped lang="scss">
    .wrapper {
        max-width: 1266px;
        width: 100%;
        min-height: 90%;
        margin: 50px auto 45px auto;
    }

    @media screen and (max-width: 1266px) {
        .wrapper {
            padding-inline: 50px;
        }
    }
    @media screen and (max-width: 600px) {
        .wrapper {
            padding-inline: 20px;
        }
    }
</style>
