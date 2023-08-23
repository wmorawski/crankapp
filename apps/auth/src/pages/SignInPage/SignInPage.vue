<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-900">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 class="text-white text-6xl text-center font-bold">crank.gg</h1>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
      <FormKit id="signInForm" type="form" @submit="signInUser" submit-label="Sign in" validation-visibility="submit">
        <div>
            <FormKit type="text" id="username" name="username" label="Username" validation="required" />
        </div>
        <div>
          <FormKit type="password" id="password" name="password" label="Password" validation="required" />
        </div>
      </FormKit>
      </div>
      <p class="mt-10 text-center text-sm text-gray-400">
        Not a member?
        {{ ' ' }}
        <router-link to="/signup" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">Signup for free</router-link>
      </p>
    </div>
    <div v-if="error" class="sm:mx-auto sm:w-full sm:max-w-sm mt-6">
      <div class="rounded-md bg-red-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <div class="text-sm text-red-700">
              <span>{{error}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {signIn, createRedirectUrl} from "../../services/auth";
  import {FormKitNode, getNode} from '@formkit/core'
  import {AxiosError} from "axios";
  import {ref} from "vue";
  import { XCircleIcon } from '@heroicons/vue/20/solid'

  const form: FormKitNode = getNode('signInUser')
  const error = ref(null)

  const signInUser = async (fields) => {
    try {
      const payload = (await signIn(fields)).data
      window.location.href = createRedirectUrl(payload)
    } catch(e: AxiosError) {
      error.value = (e.response.data.detail);
    }
  }
</script>