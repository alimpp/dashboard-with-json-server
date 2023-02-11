<template>
  <div class="tickets-cards">
    <baseCard>
      <template #cardContent>
        <div class="d-flex flex-column px-3 py-2">
          <div class="d-flex justify-content-end mb-2" dir="ltr">
            <span class="badge primary_color_bg" v-if="replayTikcet != ''">{{ $t('hasbeenanswered') }}</span>
            <i class="bi bi-trash app_pointer px-1" v-if="route.name === 'setting'"></i>
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
            class="replay-box primary_color_bg py-1 px-1 mt-2"
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

const loading = ref(false);
const route = useRoute();

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

