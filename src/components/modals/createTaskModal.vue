<template>
  <div class="create-task-modal">
    <baseModal :name="$t('createtask')" icon="pencil" width="50%">
      <template #modalContent>
        <div class="d-flex flex-column px-2">
          <span class="size_small">{{ $t("createtask") }}</span>
          <baseInput
            v-model="data.title"
            class="mt-2"
            :placeholder="$t('taskmodal.title')"
            icon="pencil"
          />
          <p class="text-danger" v-for="error in v$.title.$errors" :key="error.$uid">
            .{{ error.$message }}
          </p>
          <baseInput
            v-model="data.body"
            class="mt-2"
            :placeholder="$t('taskmodal.body')"
            icon="pencil"
          />
          <p class="text-danger" v-for="error in v$.body.$errors" :key="error.$uid">
            .{{ error.$message }}
          </p>
          <div class="d-flex mt-2">
            <baseButton :name="$t('submit')" color="primary" @click="createTask" />
          </div>
        </div>
      </template>
    </baseModal>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import baseModal from "@/components/base/baseModal";
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { CreateTask } from "@/api/tasksApiModule";

const data = ref({
  title: "",
  body: "",
});

const rules = computed(() => {
  return {
    title: {
      required,
      minLength: minLength(5),
    },
    body: {
      required,
      minLength: minLength(15),
    },
  };
});

const v$ = useVuelidate(rules, data);

const createTask = async () => {
  const result = await v$.value.$validate();
  if (result) {
    CreateTask(data.value);
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
};
</script>
