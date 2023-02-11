<template>
  <div class="create-ticket-modal">
    <baseModal :name="$t('createticket')" icon="pencil" width="50%">
      <template #modalContent>
        <div class="d-flex flex-column px-2">
          <span class="size_small">{{ $t("createticket") }}</span>
          <baseInput
            class="mt-2"
            :placeholder="$t('ticketscard.email')"
            icon="email"
            v-model="data.email"
          />
          <p class="text-danger" v-for="error in v$.email.$errors" :key="error.$uid">
            .{{ error.$message }}
          </p>
          <baseInput
            class="mt-2"
            :placeholder="$t('ticketscard.title')"
            icon="pencil"
            v-model="data.title"
          />
          <p class="text-danger" v-for="error in v$.title.$errors" :key="error.$uid">
            .{{ error.$message }}
          </p>
          <baseInput
            class="mt-2"
            :placeholder="$t('ticketscard.descrpition')"
            icon="pencil"
            v-model="data.body"
          />
          <p class="text-danger" v-for="error in v$.body.$errors" :key="error.$uid">
            .{{ error.$message }}
          </p>
          <div class="d-flex mt-2">
            <baseButton :name="$t('submit')" color="primary" @click="createTicket" />
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
import { CreateTicket } from "@/api/ticketsApiModule";

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

