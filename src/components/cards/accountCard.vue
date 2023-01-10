<template>
  <div class="account-card warning_color_bg">
    <i class="bi bi-cash-coin px-2 pt-2 dark_color"></i>
    <span class="size_very_samll dark_color">{{$t('cash')}} :</span>
    <p class="size_very_small dark_color px-2 pt-3">2/345/000 $</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.account-card{
    width: 250px;
    height: 38px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-weight: 200;
    }
    p{
        font-weight: 700;
    }
}
</style>