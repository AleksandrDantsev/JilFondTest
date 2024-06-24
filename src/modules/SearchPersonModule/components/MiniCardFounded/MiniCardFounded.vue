<script setup>
    import { useStore } from "vuex";
    const props = defineProps({
        data: Object,
        isActive: Boolean,
    });

    const store = useStore();

    const setCurrentUser = () => {
        store.commit("setCurrentUser", props.data);
    }

</script>

<template>
  <div class="mini-card-founded" @click="setCurrentUser">
        <div class="avatar">
            <img src="../../../../assets/avatar.jpg" alt="avatar">
        </div>
        <div class="info-person" :class="{'active-tab': isActive}">
            <div class="info-person__name">{{ data.name }}</div>
            <div class="info-person__email">{{ data.email }}</div>
        </div>
  </div>
</template>

<style scoped lang="scss">
    @mixin cutText {
        width: 95%;   
        overflow: hidden;      
        text-overflow: ellipsis; 
    }
    .mini-card-founded {
        display: flex;
        width: 100%;
        height: 70px;
        border-radius: 10px;
        overflow: hidden;
        margin-top: 18px;
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px #0000001A;
        animation: swingOpacityAnim 700ms ease forwards;
    }
    .avatar {
        min-width: 70px;
        max-width: 70px;
        border-right: solid 1px #E0E0E0;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    .info-person {
        width: calc(100% - 70px);
        white-space: nowrap;
        padding: 15px 5px 18px 15px;   
    }
    .info-person__name {
        font-size: 14px;
        font-weight: 600;
        color: #333333;
        @include cutText;
    }
    .info-person__email {
        font-size: 14px;
        margin-top: 5px;
        color: #76787D;
        @include cutText;
    }
    .active-tab {
        background-color: #0000001A;
    }

    @keyframes swingOpacityAnim {
        0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    @media screen and (max-width: 1000px) {
        .mini-card-founded {
            flex-direction: column;
            height: auto;
        }
        .avatar {
            width: 100%;
            text-align: center;
            max-width: unset;
            img {
                width: 50%;
                object-fit: scale-down;
            }
        }
        .info-person {
            width: 100%;
        }
    }
</style>
