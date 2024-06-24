<script setup>
    const props = defineProps({
        isError: Boolean,
    });
</script>

<template>
    <div class="not-choise-peroson">
        <span v-if="isError" class="not-choise-peroson__text error">Произошла ошибка, попробуйте повторить запрос</span>
        <span v-else class="not-choise-peroson__text">Выберите сотрудника, чтобы посмотреть его профиль</span>
    </div>
</template>

<style scoped lang="scss">
    .not-choise-peroson {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .not-choise-peroson__text {
        font-size: 14px;
        font-weight: 400;
        color: #76787D;
    }
    .error {
        color: #df1414;
    }
</style>
