<template>
  <div class="index-dashboard">
    <div class="row px-2">
      <div
        class="col-lg-6 rounded"
        :class="{
          linechart_dark_mode_theme: watchTheme === 'dark',
          linechart_light_mode_theme: watchTheme === 'light',
          rtl_design: $i18n.locale === 'fa',
        }"
      >
        <lineChart />
      </div>
      <div class="col-lg-6">
        <baseDivider :text="$t('dashboard')" width="100px" />
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
      </div>
    </div>
    <div class="row mt-5 mx-2">
      <div class="col-lg-8 pt-5">
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
      </div>
      <div
        class="col-lg-4 rounded"
        :class="{
          linechart_dark_mode_theme: watchTheme === 'dark',
          linechart_light_mode_theme: watchTheme === 'light',
          rtl_design: $i18n.locale === 'fa',
        }"
      >
        <doughnutChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import lineChart from "@/components/charts/lineChart/lineChart";
import doughnutChart from "@/components/charts/doughnutChart/doughnutChart";
import baseDivider from "@/components/base/baseDivider";
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();

const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.index-dashboard {
  width: 100%;
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
