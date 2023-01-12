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
            <i class="bi bi-trash3 px-2 pt-1 app_pointer" @click="deleteTicket(id)"></i>
          </div>
        </div>
      </template>
    </baseCard>
  </div>
</template>

<script setup>
import baseCard from "@/components/base/baseCard";
import ticketsDeatailModal from "@/components/modals/ticketsDeatailModal";
import { ticketsApi } from "@/stores/api/ticketsApi";

const ticketsApiModule = ticketsApi()

const deleteTicket = (id) => {
  return ticketsApiModule.deleteTickets(id)
}

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
