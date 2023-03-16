<script setup lang="ts">
import CardUser, { type Post } from '@/components/CardPost.vue'
import CustomComponent from '@/components/CustomComponent'

import { onMounted, ref } from 'vue'

const data = ref<Post[]>()
const loading = ref(false)

const getData = async () => {
  loading.value = true
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  data.value = await response.json()
  loading.value = false
}

onMounted(() => {
  getData()
})

const handleDelete = (post: Post) => {
  data.value = data.value?.filter((item) => item.id !== post.id)
}
const handleEdit = (post: Post) => {
  alert(post.title)
}
</script>

<template>
  <main class="container-page">
    <h1>Component Reusable</h1>
    <hr style="margin-bottom: 16px" />
    <!-- <custom-component title="Custom Component"> </custom-component> -->

    <p v-if="loading">Loading...</p>
    <template v-else>
      <CardUser v-for="item in data" :key="`post-${item.id}`" :post="item">
        <template #action="{ post }">
          <v-btn v-if="item.id > 4" color="error" size="small" @click="handleDelete(post)">
            Delete
          </v-btn>
          <v-btn v-else color="primary" size="small" @click="handleEdit(post)"> Edit </v-btn>
        </template>
      </CardUser>
      <custom-component v-for="item in data" :key="`post-${item.id}`" :title="item.title">
        <p>
          <small>{{ item.body }}</small>
        </p>
      </custom-component>
    </template>
  </main>
</template>
