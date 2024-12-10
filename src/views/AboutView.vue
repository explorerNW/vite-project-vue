<script setup lang="ts">
import { reactive, ref } from 'vue'
import { proxy } from '@/utils'

const counter = {
  value: 0,
}

const proxyValue = proxy(counter)

const count = ref(0)

const user = reactive({ name: 'Nie Wang', age: 20 })

const add = () => {
  count.value = ++proxyValue.value
  user.age++
}

const discount = () => {
  if (count.value > 0) {
    count.value = --proxyValue.value
  }
  if (user.age > 20) {
    user.age--
  }
}
</script>

<template>
  <div class="about flex flex-col border-l border-[var(--color-border)] p-2">
    <h1>This is an about page</h1>
    <div class="flex gap-4">
      <button @click="add">+</button>
      <span>{{ count }}</span>
      <button @click="discount">-</button>
    </div>
    <div class="flex flex-col gap-2">
      <span>user</span>
      <span class="ml-4">name: {{ user.name }}</span>
      <span class="ml-4">age: {{ user.age }}</span>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
