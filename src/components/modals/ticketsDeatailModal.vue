<template>
  <div>
    <baseModal
      :name="$t('ticketscard.ticketdeatail')"
      icon="deatail"
      width="50%"
      btnSmallSize="true"
    >
      <template #modalContent>
        <div class="d-flex flex-column px-3">
          <span class="size_small">{{ $t("ticketscard.email") }}</span>
          <span class="size_very_small gray_color">{{ email }}</span>
          <span class="size_small pt-2">{{ $t("ticketscard.message") }}</span>
          <span class="size_very_small gray_color">{{ body }}</span>
          <span class="size_small pt-2">{{
            $t("ticketscard.descrpition")
          }}</span>
          <span class="size_very_small gray_color pb-4"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            optio harum fuga vitae voluptate dolorem perferendis, corrupti
            voluptatum officiis aperiam quod explicabo reprehenderit nam maxime
            distinctio reiciendis. Vitae, error quas.</span
          >
        </div>
      </template>
    </baseModal>
  </div>
</template>

<script setup>
import baseModal from "@/components/base/baseModal";
const props = defineProps({
  email: {
    type: String,
    default: "",
    required: true,
  },
  body: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style></style>
