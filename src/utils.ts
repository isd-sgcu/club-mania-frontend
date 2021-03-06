import { collection, doc, getDoc, Timestamp } from 'firebase/firestore'
import { clubList } from './assets/clubs/clubList'
import { auth, db } from './firebase'
import { CollectionOption, MemberDoc, PostDoc, TextDoc } from './firestore'
import { useUserStore } from './stores/user'
import { LocalStorageKeys, RouteCategoryOption } from './types'

/**
 * @param route route of the category
 * @returns description and title used in meta tag and data of that category page
 */
export const setUpCategoryPage = (route: RouteCategoryOption, categoryInThai: string) => {
  let description = ''
  const data = clubList.filter(value => value.category === route).map((value) => {
    description += `${value.name}, `
    return {
      text: value.name,
      imgUrl: value.logo,
      href: value.url,
    }
  })
  return { description, data, title: `${categoryInThai} | Club Mania 2021` }
}

export const getCollectionRef = (collectionName: CollectionOption) => {
  return collection(db.value!, collectionName)
}

export const getFromLocal = (key: LocalStorageKeys) => {
  return localStorage.getItem(key)
}

export const setToLocal = (key: LocalStorageKeys, data: string) => {
  localStorage.setItem(key, data)
}

export const clearLocal = (key: LocalStorageKeys) => {
  localStorage.removeItem(key)
}

export const clearAllStorage = () => {
  clearLocal('anonymousId')
  clearLocal('anonymousCustomName')
  clearLocal('memberAccount')
  clearLocal('staffStatus')
}

// generates new anonymous id
export const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  // return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

export const getAnonymousId = () => {
  // get from local storage if exist
  // else gen a new one
  const id = getFromLocal('anonymousId')
  if (id !== null) return id

  const newId = guid()
  setToLocal('anonymousId', newId)
  return newId
}

/**
 * @param text text of the textarea
 * @param customName the custom name
 * @param badge null if not a club member else the badge of the club where this member belongs to
 * @returns the new text doc structure which is the base of PostDoc and is the ReplyDoc
 */
const getNewTextDoc = (
  text: string,
  customName: string,
  asAnonymous: boolean,
) => {
  const store = useUserStore()
  const user = auth.value!.currentUser
  let name = asAnonymous
    ? '?????????????????????????????????'
    : user
      ? store.displayName ?? customName
      : customName
  if (!asAnonymous && store.year) name += ` ?????? ${store.year}`
  const textDoc: TextDoc = {
    by: user ? user.email! : getAnonymousId(),
    createdAt: Timestamp.fromDate(new Date()),
    text,
    name,
    badge: asAnonymous ? null : store.badge,
  }
  return textDoc
}
/**
 * Get a new PostDoc structure
 * @param text text of the textarea
 * @param customName the custom name
 * @param badge null if not a club member else the badge of the club where this member belongs to
 * @returns a new PostDoc structure
 */
export const getNewPostDoc = (
  text: string,
  customName: string,
  asAnonymous: boolean,
): PostDoc => {
  const newTextDoc = getNewTextDoc(text, customName, asAnonymous)
  return { ...newTextDoc, replies: [], likes: [], nLikes: 0 }
}
/**
 * Get a new ReplyDoc structure
 * @param text text of the textarea
 * @param customName the custom name
 * @param badge null if not a club member else the badge of the club where this member belongs to
 * @returns a new ReplyDoc structure
 */
export const getNewReplyDoc = (
  text: string,
  customName: string,
  asAnonymous: boolean,
) => getNewTextDoc(text, customName, asAnonymous)

/**
 * Checks if a currently logged in user is a member of a club,
 * if yes, then set 'nickname', 'club ref', and 'year' to the user store.
 * If the user is not logged in, reset the values
 * @note This does not set the badge
 * @returns True if is a member of a club else False
 */
export const setValuesIfIsMember = async() => {
  // checks if is a member of a club
  // if yes set nickname, year to the user store, *not the badge
  // else reset values

  const store = useUserStore()
  const user = auth.value!.currentUser

  // user is not logged in
  if (!user) return false

  // In case it this isn't a club member account
  store.setDisplayName(user.displayName)

  // checks if user is a member of a club
  // const membersCollectionRef = getCollectionRef('members')
  // const q = query(membersCollectionRef, where(user.email,))
  const userRef = doc(db.value!, 'members', user.email!)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) return false

  const userDoc = userSnap.data() as MemberDoc
  store.setMemberValues(userDoc.name, userDoc.club.id, userDoc.year)
  return true
}

/**
 * Checks if a logged in user is a member of a club or is a staff.
 * This also sets values to the user store
 */
export const identifyUser = async() => {
  await setValuesIfIsMember()
  const userStore = useUserStore()
  await userStore.setAsStaff()
}
