<script setup>
    import { computed } from "vue";
    import { useStore } from "vuex";
    import MainInfo from '../MainInfo/MainInfo.vue';
    import NotChoisePerson from '../NotChoisePerson/NotChoisePerson.vue';

    const store = useStore();

    const currentUserInfo = computed(() => {
        return store.state.userReducers.currentUser;
    })

    const isErrorDuringSearch = computed(() => {
        return store.state.userReducers.isErrorDuringSearch;
    })

</script>

<template>
    <div class="result-window">
        <MainInfo v-if="currentUserInfo" :data="currentUserInfo" />
        <NotChoisePerson v-else :isError="isErrorDuringSearch"/>
    </div>
</template>

<style scoped lang="scss">
    .result-window {
        width: 77%;
        border-left: solid 1px #E0E0E0;
        background-color: #fff;
    }
    @media screen and (max-width: 830px) {
        .result-window {
            width: 70%;
        }
    }
    @media screen and (max-width: 650px) {
        .result-window {
            width: 60%;
        }
    }
</style>
