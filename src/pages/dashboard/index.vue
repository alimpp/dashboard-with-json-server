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
        <div class="d-flex mt-2">
          <baseButton :name="$t('started')" color="primary" />
        </div>
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
    <div class="row">
      <div class="col-lg-12 px-5">
        <baseDivider class="mb-4" :text="$t('progressbar')" width="130px" />
        <baseProgressBarLine
          color="primary"
          :lable="$t('progressbaritems.dataflow')"
          number="50"
          width="50%"
        />
        <baseProgressBarLine
          color="danger"
          :lable="$t('progressbaritems.serverside')"
          number="66"
          width="66%"
        />
        <baseProgressBarLine
          color="green"
          :lable="$t('progressbaritems.clientside')"
          number="78"
          width="78%"
        />
        <baseProgressBarLine
          color="primary"
          :lable="$t('progressbaritems.edge')"
          number="33"
          width="33%"
        />
        <baseProgressBarLine
          color="danger"
          :lable="$t('progressbaritems.opera')"
          number="90"
          width="90%"
        />
        <baseProgressBarLine
          color="green"
          :lable="$t('progressbaritems.chroome')"
          number="78"
          width="78%"
        />
      </div>
    </div>
    <div class="row px-5 mt-5">
      <div
        class="col-lg-6 rounded"
        style="height: 400px"
        :class="{
          linechart_dark_mode_theme: watchTheme === 'dark',
          linechart_light_mode_theme: watchTheme === 'light',
          rtl_design: $i18n.locale === 'fa',
        }"
      >
        <barChart />
      </div>
      <div class="col-lg-6 mt-5 pt-5">
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
      </div>
    </div>
    <div class="row px-5 pt-5">
      <div class="col-lg-6">
        <baseDivider :text="$t('progressbaritems.dataflow')" width="100px" />
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
      </div>
      <div class="col-lg-6">
        <baseDivider :text="$t('progressbaritems.clientside')" width="100px" />
        <span class="size_very_small">{{ $t("lorem") }}</span>
        <span class="size_very_small">{{ $t("lorem") }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import lineChart from "@/components/charts/lineChart/lineChart";
import doughnutChart from "@/components/charts/doughnutChart/doughnutChart";
import baseProgressBarLine from "@/components/base/baseProgressBarLine";
import barChart from "@/components/charts/barchart/barChart";
import baseDivider from "@/components/base/baseDivider";
import baseButton from "@/components/base/baseButton";
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
