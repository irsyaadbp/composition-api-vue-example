<script setup lang="ts">
import { WithHandleError } from '@/components/WithHandleError'
import { VTextField } from 'vuetify/components/VTextField'
import { Form } from 'vee-validate'

const MyTextField = WithHandleError(VTextField)

const schema = {
  firstname: (value: string, ctx: any) => {
    if (!value) return `${ctx.field} is required`
    return true
  },
  lastname: (value: string, ctx: any) => {
    if (!value) return `${ctx.field} is required`
    return true
  }
}
</script>

<template>
  <main class="container-page">
    <h1>High Order Component</h1>
    <fieldset class="pa-2">
      <legend><h3>Form</h3></legend>
      <Form :validation-schema="schema">
        <my-text-field name="firstname" label="First Name"></my-text-field>
        <my-text-field name="lastname" label="Last Name"></my-text-field>
      </Form>
    </fieldset>
  </main>
</template>
