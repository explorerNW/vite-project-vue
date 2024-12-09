<script lang="ts">
import { useUserInfo } from '@/stores/store'
import router from '@/router'

const { userInfo, setUserInfo } = useUserInfo()
const login = () => {
  setUserInfo({ ...userInfo, login: true })
  router.replace('/')
}

export default {
  methods: {
    login,
  },
}
</script>
<template>
  <div>
    <button @click="login">login</button>
  </div>
</template>

<style lang="sass"></style>
