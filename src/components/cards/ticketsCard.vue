<template>
  <div class="tickets-cards">
    <baseCard>
      <template #cardContent>
        <div class="d-flex flex-column px-3 py-2">
          <span class="size_small">{{ $t("ticketscard.email") }}</span>
          <span class="size_very_small gray_color">{{ email }}</span>
          <span class="size_small pt-2">{{ $t("ticketscard.message") }}</span>
          <span class="size_very_small gray_color">{{ body }}</span>
          <div class="d-flex mt-2">
            <ticketsDeatailModal :email="email" :body="body" />
            <div
              class="spinner-border spinner-border-sm mx-2 mt-2"
              role="status"
              v-if="loading"
            ></div>
            <i
              v-else
              class="bi bi-trash3 px-2 pt-1 app_pointer"
              @click="deleteTicket(id)"
            ></i>
          </div>
        </div>
      </template>
    </baseCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import baseCard from "@/components/base/baseCard";
import ticketsDeatailModal from "@/components/modals/ticketsDeatailModal";
import { ticketsApi } from "@/stores/api/ticketsApi";

const loading = ref(false);

const ticketsApiModule = ticketsApi();

const deleteTicket = (id) => {
  loading.value = true;
  return ticketsApiModule.deleteTickets(id);
  setTimeout(() => {
    loading.value = false;
  }, 3000);
};

const props = defineProps({
  email: {
    type: String,
    default: "",
    required: false,
  },
  body: {
    type: String,
    default: "",
    required: false,
  },
  id: {
    type: Number,
    default: "",
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
