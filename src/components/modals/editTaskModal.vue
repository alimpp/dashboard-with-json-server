<template>
  <baseModal
    :name="$t('taskcard.edittask')"
    icon="pencile"
    width="350px"
    btnSmallSize="true"
  >
    <template #modalContent>
      <div class="d-flex flex-column px-2">
        <span class="size_small">{{ $t("taskcard.edittask") }}</span>
        <baseInput
          class="mt-1"
          :placeholder="$t('taskcard.edittask')"
          icon="pencil"
          v-model="data.title"
        />
        <div class="d-flex mt-2">
          <baseButton @click="editTask" color="primary" :name="$t('submit')" />
        </div>
      </div>
    </template>
  </baseModal>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import baseModal from "@/components/base/baseModal";
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";

const tasksApiModule = tasksApi()
const data = ref({
  id: props.id,
  title: props.title,
});

const editTask = async () => {
  await tasksApiModule.editTask(data.value)
}

const props = defineProps({
  title: {
    type: String,
    default: "",
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>

<style></style>
