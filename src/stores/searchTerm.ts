import { acceptHMRUpdate, defineStore } from 'pinia'
import { ThemeOption, Club } from '~/types'
import { clubList } from '~/assets/clubs/clubList'

const MAX_DISPLAY = 5 // limited the number of display result

export const useSearchTerm = defineStore('searchTerm', () => {
  const foundClubs = ref<Array<Club>>([])
  const savedTerm = ref<string>('')
  const initial = ref(true)

  /**
  *This function search for clubs whose name matches with savedTerm
  *@param foundClubs array of matched clubs
  **/
  const searchClub = async(savedTerm: string) => {
    // reset foundClubs value when start searching
    foundClubs.value = []

    if (savedTerm !== '') {
      // handle lowercase and uppercase are not match
      savedTerm = savedTerm.toLowerCase()
      const bufferArr = [] // [[score, club's index]]
      for (let i = 0; i < clubList.length; i++) {
        const clubname = clubList[i].name.toLowerCase()
        const idxOfFirstChar = clubname.indexOf(savedTerm)
        if (idxOfFirstChar !== -1)
          bufferArr.push([idxOfFirstChar, i])
      }

      // sort by the front value first and then sort by second value
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

  // trigger when saveTerm change
  watch(savedTerm, (savedTerm) => {
    // block search when webpage is open
    if (initial.value) {
      initial.value = false
      return
    }
    // delay 500ms after user types
    const timer = setTimeout(() => {
      searchClub(savedTerm)
    }, 500)
    return () => clearTimeout(timer) // clear previous called timer
  })

  function setNewTerm(name: ThemeOption) {
    savedTerm.value = name
  }

  function clearSavedTerm() {
    savedTerm.value = ''
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
