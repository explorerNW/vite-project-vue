<script setup lang="ts">
import { useUserInfo } from '@/stores'
import router from '@/router'

const { userInfo, setUserInfo } = useUserInfo()
const login = () => {
  setUserInfo({ ...userInfo, login: true })
  router.replace('/')
}
</script>
<template>
  <div>
    <button @click="login">login</button>
  </div>
</template>

<style lang="sass"></style>
