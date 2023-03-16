<script setup lang="ts">
export interface Post {
  id: number
  title: string
  body: string
}

defineProps<{ post: Post; noDelete?: boolean }>()

const emit = defineEmits<{
  (e: 'delete', post: Post): void
}>()
</script>
<template>
  <fieldset class="card">
    <slot name="title" :post="post">
      <h2>{{ post.title }}</h2>
    </slot>
    <hr />
    <slot name="description" :post="post">
      <p>{{ post.body }}</p>
    </slot>

    <div class="mt-4">
      <slot name="action" :post="post">
        <v-btn v-if="!noDelete" color="error" size="small" @click="emit('delete', post)">
          Delete
        </v-btn>
      </slot>
    </div>
  </fieldset>
</template>

<style scoped>
.card {
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
