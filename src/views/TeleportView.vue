<script setup lang="ts">
import { ref } from 'vue'
const openModal = ref<boolean>(false)
</script>
<template>
  <main class="container-page">
    <h1>Teleport</h1>
    <v-btn class="button-open" icon color="info" size="large" @click="openModal = true">
      Open
    </v-btn>

    <Teleport to="head">
      <div class="modal" v-if="openModal">
        <v-card width="200">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="openModal = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.button-open {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
