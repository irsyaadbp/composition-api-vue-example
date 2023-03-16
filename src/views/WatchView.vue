<script setup lang="ts">
import { ref, watch, reactive, watchEffect, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const { query } = useRoute()

const myName = ref('')
const tempName = ref('')
const headerName = ref<HTMLHeadElement>()

const obj = reactive({ count: 0 })
const queryTodoId = Number(query.todo_id as string) || 1
const todoId = ref(queryTodoId)
const textCleanUp = ref('')
const data = ref(null)
const loadingTodo = ref(false)

const todoIdWatchEffect = ref(queryTodoId)
const dataWatchEffect = ref(null)
const loadingWatchEffect = ref(false)

watch(myName, (newName, oldName) => {
  alert(`Name updated from ${oldName} to ${newName}`)
})

// array of multiple sources
watch([myName, tempName], ([newMyName, newTempName], [oldMyName, oldTempName]) => {
  console.log(`new myName is ${newMyName} and new tempName is ${newTempName}`)
  console.log(`old myName is ${oldMyName} and old tempName is ${oldTempName}`)
})

// Deep
watch(
  obj,
  (newValue, oldValue) => {
    console.log(`Count from ${oldValue.count} to ${newValue.count}`)
  },
  { deep: true }
)

// Immediate
watch(
  todoId,
  async () => {
    loadingTodo.value = true
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data.value = await response.json()
    loadingTodo.value = false
  },
  { immediate: true }
)

watch(todoId, async (_newValue, _oldValue, onCleanUp) => {
  textCleanUp.value = 'Get data...'
  const timeout = setTimeout(() => {
    textCleanUp.value = ''
  })

  onCleanUp(() => {
    clearTimeout(timeout)
  })
})

const unwatch = watch(todoId, async () => {
  alert('Todo Id berubah')
})

onMounted(() => {
  unwatch()
})

// const randomAsyncFunction = (): Promise<void> =>
//   new Promise((resolve) => {
//     const timeout = setTimeout(() => {
//       resolve()
//       clearTimeout(timeout)
//     }, 3000)
//   })

watchEffect(async () => {
  loadingWatchEffect.value = true
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoIdWatchEffect.value}`
  )
  dataWatchEffect.value = await response.json()
  loadingWatchEffect.value = false
})
</script>
<template>
  <main class="container-page">
    <h1>Watch</h1>
    <v-text-field v-model="tempName" label="Name"></v-text-field>
    <v-btn @click="myName = tempName">Update</v-btn>

    <h2 ref="headerName">{{ myName }}</h2>

    <fieldset style="padding: 1rem">
      <legend>Deep</legend>
      <h2>{{ obj.count }}</h2>
      <v-btn @click="obj.count++">Update Count</v-btn>
    </fieldset>

    <fieldset style="padding: 1rem">
      <legend>Immediate</legend>
      <p>{{ todoId }}</p>
      {{ textCleanUp }}
      <v-btn @click="todoId++" :disabled="loadingTodo">Change Todo Id</v-btn>
      <p v-if="loadingTodo">Loading...</p>
      <pre v-else>{{ data }}</pre>
    </fieldset>

    <fieldset style="padding: 1rem">
      <legend>Watch Effect</legend>
      <p>{{ todoIdWatchEffect }}</p>
      <v-btn @click="todoIdWatchEffect++" :disabled="loadingWatchEffect">Change Todo Id</v-btn>
      <p v-if="loadingWatchEffect">Loading...</p>
      <pre v-else>{{ dataWatchEffect }}</pre>
    </fieldset>
  </main>
</template>
