import { doc, DocumentReference } from 'firebase/firestore'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { db } from '~/firebase'

export const useUserStore = defineStore('user', () => {
  const clubOfUser = ref<DocumentReference | null>(null) // club route
  // displayName is the nickname of the club member if this user is a member of a club or the default display name of the google account
  const displayName = ref<string | null>(null)
  const badge = ref<string | null>(null)

  const reset = () => {
    clubOfUser.value = displayName.value = badge.value = null
  }

  /**
   * Checks if the user is a member of the specified club name
   * @param clubName Club name as in route
   * @returns True if this member is a member of the specified club
   */
  const isMember = (clubName: string) => {
    if (clubOfUser.value === null) return false
    const currentClubRef = doc(db.value!, 'clubs', clubName)
    return clubOfUser.value === currentClubRef
  }

  /**
   * Sets the badge of a club member to the user store
   * @param badgeText the badge of this club
   */
  const setBadge = (badgeText: string) => {
    badge.value = badgeText
  }
  const setDisplayName = (name: string) => {
    displayName.value = name
  }
  const setClubOfUser = (clubRef: DocumentReference) => {
    clubOfUser.value = clubRef
  }

  const setMemberValues = async({ nickname, clubRef }: {
    nickname: string
    clubRef: DocumentReference
  }) => {
    // badge is needed to set separately because it lives in the static info files
    displayName.value = nickname
    clubOfUser.value = clubRef
  }

  return {
    clubOfUser,
    displayName,
    badge,
    setBadge,
    setDisplayName,
    setClubOfUser,
    reset,
    setMemberValues,
    isMember,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
