<template>
  <div class="base-modal-container">
    <button class="btn btn-primary" @click="changeStatusModal">
      <div
        class="spinner-border spinner-border-sm text-light"
        role="status"
        v-if="loading"
      ></div>
      {{ name }}
    </button>
    <div class="base-modal" v-if="isOpen">
      <div class="base application_animation">
        <div class="d-flex justify-content-end">
          <i
            class="bi bi-x application_pointer px-2"
            @click="changeStatusModal"
          ></i>
        </div>
        <slot name="modalContent"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
function changeStatusModal() {
  if (isOpen.value == false) {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
}
const props = defineProps({
  name: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.base-modal-container {
  width: 100%;
  .base-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(6, 6, 6, 0.5);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    transition: 1s;
    .base {
      width: 90%;
      border-radius: 5px;
      background: var(--light-color);
      padding: 10px 5px;
    }
  }
}
</style>
