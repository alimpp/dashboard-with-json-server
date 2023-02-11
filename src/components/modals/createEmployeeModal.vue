<template>
  <div class="create-employee-modal">
    <baseModal :name="$t('createemployee')" icon="pencil" width="50%">
      <template #modalContent>
        <div class="d-flex flex-column px-2">
          <span class="size_small">{{ $t("createemployee") }}</span>
          <baseInput
            class="mt-2"
            :placeholder="$t('username')"
            icon="username"
            v-model="data.username"
          />
          <p class="text-danger" v-for="error in v$.username.$errors" :key="error.$uid">
            .{{ error.$message }}
          </p>
          <baseInput
            class="mt-2"
            :placeholder="$t('email')"
            icon="email"
            v-model="data.email"
          />
          <p class="text-danger" v-for="error in v$.email.$errors" :key="error.$uid">
            .{{ error.$message }}
          </p>
          <div class="d-flex mt-2">
            <baseButton :name="$t('submit')" color="primary" @click="createEmployee" />
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
import { createEmpolyee } from "@/api/employeesApiModule";

const data = ref({
  username: "",
  email: "",
});

const rules = computed(() => {
  return {
    email: {
      required,
      email,
    },  
    username: {
      required,
      minLength: minLength(5),
    },
  };
});

const v$ = useVuelidate(rules, data);

const createEmployee = async () => {
  const result = await v$.value.$validate();
  if (result) {
    createEmpolyee(data.value);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
};
</script>
