<template>
  <div>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link mx-1 active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          <span class="size_small">{{ $t("sidebar.tickets") }}</span>
        </button>
        <button
          class="nav-link mx-1"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          <span class="size_small">{{ $t("sidebar.tasks") }}</span>
        </button>
        <button
          class="nav-link mx-1"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-contact"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
        >
          <span class="size_small">{{ $t("sidebar.employees") }}</span>
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <ticketsTab />
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <taskTabs />
      </div>
      <div
        class="tab-pane fade"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <employeesTab />
      </div>
    </div>
  </div>
</template>

<script setup>
import ticketsTab from "@/components/settingTabs/ticketsTab";
import employeesTab from "@/components/settingTabs/employeesTab";
import taskTabs from "@/components/settingTabs/taskTabs";
</script>

<style></style>
