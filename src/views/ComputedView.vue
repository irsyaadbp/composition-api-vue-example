<script setup lang="ts">
import { computed, ref } from 'vue'

const firstName = ref<string>('')

const panjang = ref<number>(0)
const lebar = ref<number>(0)

const fullName = computed(() => {
  console.log('computed firstname update')
  return `${firstName.value} Budi`
})
const getFullName = () => {
  console.log('methods firstname update')
  return `${firstName.value} Budi`
}

const anotherName = computed({
  get() {
    return `${fullName.value} weight: ${luas.value}`
  },
  set(value) {
    firstName.value = value
  }
})

const luas = computed(() => panjang.value * lebar.value)
</script>
<template>
  <main class="container-page">
    <h1>Computed</h1>
    <v-text-field v-model="firstName" label="First Name"></v-text-field>
    <v-text-field v-model="panjang" label="Panjang" type="number"></v-text-field>
    <v-text-field v-model="lebar" label="Lebar" type="number"></v-text-field>
    <div>
      <h3>With Computed</h3>
      <p>{{ fullName }}</p>
      <p>{{ anotherName }}</p>
      <p>
        Luas: <strong>{{ luas }}</strong>
      </p>
      <hr />

      <h3>With Method</h3>
      <p>{{ getFullName() }}</p>
    </div>
  </main>
</template>
