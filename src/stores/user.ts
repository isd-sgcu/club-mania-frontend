import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  const savedName = ref('')
  const username = sessionStorage.getItem('username')
  if (username)
    savedName.value = username

  function setNewName(name: string) {
    savedName.value = name
    sessionStorage.setItem('username', name)
  }

  return {
    savedName,
    setNewName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
