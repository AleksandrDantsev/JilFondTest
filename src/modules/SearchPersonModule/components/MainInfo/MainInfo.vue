<script setup>
    const props = defineProps({
        data: Object,
    });

</script>

<template>
    <div class="main-info">
        <div class="avatar">
            <img src="../../../../assets/avatar_general.jpg" alt="avatar">
        </div>
        <div class="general-info">
            <div class="general-info__title">
                <h2>{{ data.name }}</h2>
            </div>
            <div class="general-info__category">
                <h3 class="title-info">email: </h3>
                <p>{{ data.email }}</p>
            </div>
            <div class="general-info__category">
                <h3 class="title-info">phone: </h3>
                <p>{{ data.phone }}</p>
            </div>
            <div class="general-info__about-person">
                <h3 class="title-info title-about-person">О себе:</h3>
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main-info {
        display: flex;
        margin: 32px 30px 30px 20px;
        animation: swingOpacityAnim 700ms ease forwards;
    }
    .avatar {
        width: 49%;
        margin-right: 60px;
        height: 285px;
        border: solid 1px #E0E0E0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .general-info {
        width: 51%;
    }
    .general-info__title {
        h2 {
            font-size: 16px;
            font-weight: 600;
            color: #333333;
        }
    }
    .title-info {
        font-size: 14px;
        font-weight: 600;
        color: #333333;
    }
    .general-info__category {
        display: flex;
        margin-top: 14px;
        p {
            font-size: 14px;
            margin-left: 10px;
            color: #76787D;
        }
    }
    .general-info__about-person {
        margin-top: 23px;
        p {
            margin: 25px 0;
            font-size: 14px;
            line-height: 17px;
            color: #152650;
        }
    }
    .title-about-person {
        font-size: 16px;
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
    @media screen and (max-width: 850px) {
        .main-info {
            flex-direction: column;
        }
        .avatar {
            width: 100%;
            text-align: center;
            border: unset;
            margin-bottom: 30px;
            img {
                width: 80%; 
                border: solid 1px #e0e0e0b2;  
            }
        }
        .general-info {
            width: 95%;
        }
    }
    @media screen and (max-width: 630px) {
        .avatar {
            img {
                width: 100%;
            }
        }
    }
</style>
