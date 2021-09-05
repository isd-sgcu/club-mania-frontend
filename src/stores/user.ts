import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const clubOfUser = ref<string | null>(null) // club route
  const displayName = ref<string | null>(null)
  const badge = ref<string | null>(null)

  const setBadge = (str: string) => {
    badge.value = str
  }
  const setDisplayName = (name: string) => {
    displayName.value = name
  }
  const setClubOfUser = (clubRoute: string) => {
    clubOfUser.value = clubRoute
  }

  return {
    clubOfUser,
    displayName,
    badge,
    setBadge,
    setDisplayName,
    setClubOfUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
