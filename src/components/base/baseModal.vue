<template>
  <div class="base-modal-container">
    <button
      class="btn primary_color_bg white_color"
      :class="{ 'btn-sm': btnSmallSize }"
      @click="changeStatusModal"
    >
      <div
        class="spinner-border spinner-border-sm text-light"
        role="status"
        v-if="loading"
      ></div>
      <i
        class="bi"
        :class="{ 'bi-person': profile, 'bi-briefcase': deatail, 'bi-pencil': pencil }"
      ></i>
      {{ name }}
    </button>
    <div class="base-modal" v-if="isOpen">
      <div
        class="base app_animation"
        :class="{
          basemodal_dark_mode_theme: watchTheme === 'dark',
          basemodal_light_mode_theme: watchTheme === 'light',
        }"
        :style="{ width: width }"
      >
        <div class="d-flex justify-content-end">
          <i class="bi bi-x app_pointer px-2" @click="changeStatusModal"></i>
        </div>
        <slot name="modalContent"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();
const isOpen = ref(false);

const watchTheme = computed(() => {
  return theme.themeStatus;
});

function changeStatusModal() {
  if (isOpen.value == false) {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
}

const profile = computed(() => {
  if (props.icon === "profile") {
    return true;
  }
});

const deatail = computed(() => {
  if (props.icon === "deatail") {
    return true;
  }
});

const pencil = computed(() => {
  if (props.icon === "pencil") {
    return true;
  }
});

const props = defineProps({
  name: {
    type: String,
    default: "",
    required: true,
  },
  icon: {
    type: String,
    default: "",
    required: true,
  },
  width: {
    type: String,
    default: "",
    required: true,
  },
  btnSmallSize: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(8, 10, 10, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(0px);
  transition: 1s;
  .base {
    border-radius: 5px;
    padding: 10px 5px;
  }
}
</style>
