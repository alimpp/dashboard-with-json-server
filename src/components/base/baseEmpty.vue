<template>
  <div class="base-empty">
    <span class="size_small">{{ text }}</span>
    <baseButton :name="buttonName" color="primary" @click="goToRouteName" />
  </div>
</template>

<script setup>
import baseButton from "@/components/base/baseButton";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  text: {
    type: String,
    default: "",
    required: false,
  },
  buttonName: {
    type: String,
    default: "",
    required: false,
  },
  routeName: {
    type: String,
    default: "",
    required: false,
  },
});

const goToRouteName = () => {
  return router.push(`/${props.routeName}`);
};
</script>

<style>
.base-empty {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
