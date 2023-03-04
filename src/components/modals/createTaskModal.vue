<template>
  <div class="create-task-modal">
    <baseModal :name="$t('createtask')" icon="pencil" width="50%">
      <template #modalContent>
        <div class="d-flex flex-column px-2"></div>
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

const data = ref({
  email: "",
  title: "",
  body: "",
});

const rules = computed(() => {
  return {
    email: {
      required,
      email,
    },
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

const createTicket = async () => {
  const result = await v$.value.$validate();
  if (result) {
    CreateTicket(data.value);
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
};
</script>

