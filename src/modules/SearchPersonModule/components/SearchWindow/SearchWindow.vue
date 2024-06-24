<script setup>
    import ResultFoundInfo from '../ResultFoundInfo/ResultFoundInfo.vue';
    import SideBarSearch from '../SideBarSearch/SideBarSearch.vue';
</script>

<template>
  <div class="search-window">
      <SideBarSearch />
      <ResultFoundInfo />
  </div>
</template>

<style scoped lang="scss">
    .search-window {
        display: flex;
        width: 100%;
        min-height: 580px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px #0000001A;
        margin-top: 25px;
        overflow: hidden;
        background-color: #FDFDFD;
    }
</style>
