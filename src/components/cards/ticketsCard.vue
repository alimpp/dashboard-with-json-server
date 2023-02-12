<template>
  <div class="tickets-cards">
    <baseCard>
      <template #cardContent>
        <div class="d-flex flex-column px-3 py-2">
          <div class="d-flex justify-content-end mb-2" dir="ltr">
            <span
              class="primary_color_bg pt-2 px-2 mx-2 rounded light_color size_very_small"
              v-if="replayTikcet != ''"
              >{{ $t("hasbeenanswered") }}</span
            >
            <i
              @click="deletedTicket(id)"
              class="bi bi-trash app_pointer pt-1"
              v-if="route.name === 'setting'"
            ></i>
          </div>
          <span class="size_small primary_color">{{ email }}</span>
          <span class="size_small">{{ title }}</span>
          <span class="size_very_small pt-1">{{ body }}</span>
          <div class="d-flex mt-2" v-if="replayTikcet === '' && route.name === 'tickets'">
            <replayTicketModal
              :id="id"
              :email="email"
              :title="title"
              :body="body"
              :replayTikcet="replayTikcet"
            />
          </div>
          <div
            class="replay-box dark_color primary_color_bg py-1 px-1 mt-2"
            style="border-radius: 5px"
            v-if="replayTikcet != ''"
          >
            <span class="light_color size_very_small">{{ replayTikcet }}</span>
          </div>
        </div>
      </template>
    </baseCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import baseCard from "@/components/base/baseCard";
import replayTicketModal from "@/components/modals/replayTicketModal";
import { useRoute } from "vue-router";
import { deleteTicket } from "@/api/ticketsApiModule";

const loading = ref(false);
const route = useRoute();

const deletedTicket = (id) => {
  deleteTicket(id)
  setTimeout(() => {
    location.reload()
  } , 1000)
}

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
</script>
