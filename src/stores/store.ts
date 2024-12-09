import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

interface userInfo {
  name: string
  loginAt: string
  login: boolean
  permissions: string[]
}

export const useUserInfo = defineStore('userInfo', {
  state: (): { userInfo: userInfo } => {
    return { userInfo: { name: 'Nie Wang', loginAt: '', login: false, permissions: ['admin'] } }
  },
  getters: {},
  actions: {
    setUserInfo(userInfo: userInfo) {
      this.userInfo = { ...userInfo }
    },
  },
})
