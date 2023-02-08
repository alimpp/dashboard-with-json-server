<template>
  <div>
    <baseModal
      :name="$t('ticketscard.replayticket')"
      icon="deatail"
      width="50%"
      btnSmallSize="true"
    >
      <template #modalContent>
        <div class="d-flex flex-column px-3">
          <span class="size_small">{{ $t("ticketscard.email") }}</span>
          <span class="size_very_small">{{ email }}</span>
          <span class="size_small pt-2">{{ $t("ticketscard.title") }}</span>
          <span class="size_very_small">{{ title }}</span>
          <span class="size_small pt-2">{{ $t("ticketscard.message") }}</span>
          <span class="size_very_small">{{ body }}</span>
          <baseInput
            class="mt-2"
            v-model="data.replayMessage"
            :placeholder="$t('ticketscard.replayticket')"
            icon="pencil"
          />
          <p
            class="danger_color size_small"
            v-for="error in v$.replayMessage.$errors"
            :key="error.$uid"
          >
            .{{ error.$message }}
          </p>
          <div class="d-flex mt-2">
            <baseButton :name="$t('submit')" color="primary" @click="sendReplayMessage" />
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
import { replayTicket } from "@/api/ticketsApiModule";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

const data = ref({
  replayMessage: "",
});

const rules = computed(() => {
  return {
    replayMessage: {
      required,
      minLength: minLength(8),
    },
  };
});

const v$ = useVuelidate(rules, data);

const props = defineProps({
  id: {
    type: Number,
    default: "",
    required: false,
  },
  email: {
    type: String,
    default: "",
    required: false,
  },
  title: {
    type: String,
    default: "",
    required: false,
  },
  body: {
    type: String,
    default: "",
    required: false,
  },
  replayTikcet: {
    type: String,
    default: "",
    required: false,
  },
});

const sendReplayMessage = async () => {
  const result = await v$.value.$validate();
  if (result) {
    const message = {
      id: props.id,
      email: props.email,
      title: props.title,
      body: props.body,
      replayTikcet: data.value.replayMessage,
    };
    replayTicket(message, props.id);
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
};
</script>

<style></style>
