import { doc, DocumentReference } from 'firebase/firestore'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { db } from '~/firebase'

export const useUserStore = defineStore('user', () => {
  const clubOfUser = ref<DocumentReference | null>(null) // ref to the club of this member
  // displayName is the nickname of the club member if this user is a member of a club or the default display name of the google account OR if the user is not logged in this is the name saved when a custom named is typed and the post is submitted
  const displayName = ref<string | null>(null)
  const badge = ref<string | null>(null)
  const year = ref<number | null>(null)

  const reset = () => {
    // We don't reset displayName because we still want anonymous user's custom name to persist
    clubOfUser.value = badge.value = null
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
  /**
   * @param name display name of the club member or the auth.user.displayName which can be null
   */
  const setDisplayName = (name: string | null) => {
    displayName.value = name
  }
  const setClubOfUser = (clubRef: DocumentReference) => {
    clubOfUser.value = clubRef
  }
  /**
   * @param y as in student year
   */
  const setYear = (y: number) => {
    year.value = y
  }

  /**
   * Set displayable values of a club member except the badge
   * @param nickname Nickname of this member from the documents
   * @param clubRef Reference to the club documents
   * @param y year of the student from the document
   */
  const setMemberValues = (
    nickname: string,
    clubRef: DocumentReference,
    y: number,
  ) => {
    // badge is needed to set separately because it lives in the static info files
    displayName.value = nickname
    clubOfUser.value = clubRef
    year.value = y
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
    setYear,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
