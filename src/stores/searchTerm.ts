import { acceptHMRUpdate, defineStore } from 'pinia'
import { ThemeOption, Club } from '~/types'
import { clubList } from '~/assets/clubs/clubList'

const MAX_DISPLAY = 5

export const useSearchTerm = defineStore('searchTerm,', () => {
  const foundClubs = ref<Array<Club>>([])
  const savedTerm = ref<string>('')
  const initial = ref(true)

  const searchClub = async(savedTerm: string) => {
    // TODO: implement search logic
    foundClubs.value = []

    if (savedTerm !== '') {
      savedTerm = savedTerm.toLowerCase()
      const bufferArr = [] // [[score, club's index]]
      for (let i = 0; i < clubList.length; i++) {
        const clubname = clubList[i].name.toLowerCase()
        const idx = clubname.indexOf(savedTerm)
        if (idx !== -1)
          bufferArr.push([idx, i])
      }

      const processArr = bufferArr.sort((a, b) => {
        if (a[0] < b[0])
          return -1
        if (a[0] > b[0])
          return 1
        return a[1] - b[1]
      })
      for (let i = 0; i < MAX_DISPLAY && i < processArr.length; i++) {
        const idx = processArr[i][1]
        foundClubs.value.push(clubList[idx])
      }
    }
  }

  watch(savedTerm, (savedTerm) => {
    if (initial.value) {
      initial.value = false
      return
    }
    const timer = setTimeout(() => {
      searchClub(savedTerm)
    }, 500)
    return () => clearTimeout(timer)
  })

  function setNewTerm(name: ThemeOption) {
    savedTerm.value = name
  }

  function clearSavedTerm() {
    savedTerm.value = ''
    initial.value = true
  }

  function getClubs() {
    return foundClubs.value
  }

  return {
    savedTerm,
    setNewTerm,
    clearSavedTerm,
    getClubs,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchTerm, import.meta.hot))
