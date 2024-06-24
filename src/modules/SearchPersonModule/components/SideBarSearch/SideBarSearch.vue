<script setup>
    import MiniCardFounded from '../MiniCardFounded/MiniCardFounded.vue';
    import { debounce } from "../../../../helpers/debounce";
    import { ref, computed } from 'vue';
    import { useStore } from "vuex";

    const store = useStore();
    const searchQuery = ref('');

    const data = computed(() => {
        return store.state.userReducers.data;
    });

    const isLoading = computed(() => {
        return store.state.userReducers.isLoading;
    })
    
    const setupSearchQuery = debounce((event) => {
        if (!isLoading.value) searchQuery.value = event.target.value;
        if (searchQuery.value.length === 0) {
            store.commit("setCurrentUser", null);
            store.commit("setData", []);
        }
        else store.dispatch("useFetchData", searchQuery)
    }, 1500)

    const deleteValue = () => {
        searchQuery.value = '';
        store.commit("setData", []);
        store.commit("setCurrentUser", null);
    }
    const activeTab = computed(() => {
        return store.state.userReducers.currentUser;
    })

</script>

<template>
  <div class="side-bar-search">
        <div class="side-bar-search__wrapper">
            <h3>Поиск сотрудников</h3>
            <div class="search-input">
                <input @input.prevent="setupSearchQuery" 
                        type="text"
                        :value="searchQuery"     
                        placeholder="Введите Id или имя"
                        :class="{'diactive' : isLoading}">
                <div v-if="searchQuery" class="cross-delete-val" @click="deleteValue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path stroke="#d1d1d1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 5 5 19M5 5l4.5 4.5M12 12l7 7"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="side-bar-search__wrapper result-bar">
            <h3>Результаты</h3>
            <div v-if="isLoading" class="loader">
                <div class="dots"></div>
            </div>
            <div v-if="!data.length && !isLoading" class="call-to-action">{{ searchQuery ? "ничего не найдено" : "начните поиск" }}</div>
            <div v-else-if="!isLoading" class="founed-person">
                <MiniCardFounded v-for="item in data" 
                                        :key="item.id" 
                                        :data="item"
                                        :isActive="item.id === activeTab?.id"
                                        />
            </div>
        </div>
  </div>
</template>

<style scoped lang="scss">
    .side-bar-search {
        height: 100%;
        width: 23%;
    }
    .side-bar-search__wrapper {
        margin: 30px 30px 20px 20px;
        height: 100%;
        h3 {
            font-size: 16px;
            font-weight: 600;
            color: #333333;
        }
    }
    .search-input {
        position: relative;
        margin-top: 23px;
        input {
            border-radius: 8px;
            height: 48px;
            width: 100%;
            border: solid 1.5px #E9ECEF;
            font-size: 14px;
            font-weight: 400;
            padding: 16px 24px 16px 16px;
            &:focus {
                outline: solid 1px gray;
            }
        }
    }
    .result-bar {
        margin-top: 24px;
    }
    .call-to-action {
        margin-top: 10px;
        font-size: 14px;
        color: #76787D;
    }
    .cross-delete-val {
        cursor: pointer;
        position: absolute;
        right: 15px;
        top: 14px;
        cursor: pointer;
        svg {
            pointer-events: none;
            user-select: none;
        }
    }
    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 55px 0;
    }
    .dots {
        width: 12px;
        height: 12px;
        background: #d4d5d9;
        color: #d4d5d9;
        border-radius: 50%;
        box-shadow: 28.8px 0,-28.8px 0;
        animation: dots-u8fzftlg 1.2s infinite linear alternate;
    }
    .diactive {
        user-select: none;
        pointer-events: none;
    }

    @keyframes dots-u8fzftlg {
    0% {
        box-shadow: 28.8px 0,-28.8px 0;
    }

    33% {
        box-shadow: 28.8px 0,-28.8px 0 rgba(212,213,217,0.13);
        background: rgba(212,213,217,0.13);
    }

    66% {
        box-shadow: 28.8px 0 rgba(212,213,217,0.13),-28.8px 0;
        background: rgba(212,213,217,0.13);
    }
    }
    @media screen and (max-width: 830px) {
        .side-bar-search {
            width: 30%;
        }
    }
    @media screen and (max-width: 650px) {
        .side-bar-search {
            width: 40%;
        }
    }
</style>
