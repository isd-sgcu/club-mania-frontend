import { doc, getDoc } from 'firebase/firestore'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { auth, db } from '~/firebase'
import { getFromLocal, setToLocal } from '~/utils'

export const useUserStore = defineStore('user', () => {
  const clubOfUser = ref<string | null>(null) // ref to the club of this member
  // displayName is the nickname of the club member if this user is a member of a club or the default display name of the google account OR if the user is not logged in this is the name saved when a custom named is typed and the post is submitted
  const displayName = ref<string | null>(null)
  const badge = ref<string | null>(null)
  const year = ref<number | null>(null)
  const asStaff = ref(false) // tells if this user is a staff of the site

  /**
   * Check if user's data is in the local storage, is called before page mount
   * @param userData contain nickname, club, year
   */
  const persistedData = getFromLocal('memberAccount')
  if (persistedData) {
    const userData = JSON.parse(persistedData)
    displayName.value = userData.nickname
    clubOfUser.value = userData.club
    year.value = userData.y
  }
  else {
    // staff data isn't in local storage then find anonymousCustomName
    const customName = getFromLocal('anonymousCustomName')
    displayName.value = customName ?? customName
  }

  const staffStatus = getFromLocal('staffStatus')
  if (staffStatus) asStaff.value = true

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
    if (name)
      setToLocal('anonymousCustomName', name) // save to local storage
    displayName.value = name
  }
  const setClubOfUser = (club: string) => {
    clubOfUser.value = club
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
    club: string,
    y: number,
  ) => {
    // badge is needed to set separately because it lives in the static info files
    displayName.value = nickname
    clubOfUser.value = club
    year.value = y
    const storedData = {
      nickname,
      club,
      y,
    }
    setToLocal('memberAccount', JSON.stringify(storedData))
  }

  /**
   * Sets the value of asStaff by looking of the logged in user's email
   * @returns True if is a staff else False
   */
  const setAsStaff = async() => {
    const user = auth.value!.currentUser
    if (!user) return false
    const staffDoc = await getDoc(doc(db.value!, 'staffs', user.email!))
    if (staffDoc.exists()) setToLocal('staffStatus', 'true')
    return asStaff.value = staffDoc.exists()
  }

  const reset = () => {
    // We don't reset displayName because we still want anonymous user's custom name to persist
    clubOfUser.value = badge.value = null
    year.value = null
    asStaff.value = false
  }

  /**
   * Checks if the user is a member of the specified club name
   * @param clubName Club name as in route
   * @returns True if this member is a member of the specified club
   */
  const isMember = (clubName: string) => {
    if (!clubOfUser.value) return false
    return clubOfUser.value === clubName
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
    setAsStaff,
    asStaff,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
