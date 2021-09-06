import { collection, doc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'
import { CollectionOption, MemberDoc } from './firestore'
import { useUserStore } from './stores/user'
import { LocalStorageKeys } from './types'

export const getCollectionRef = (collectionName: CollectionOption) => {
  return collection(db.value!, collectionName)
}

export const getFromLocal = (key: LocalStorageKeys) => {
  return localStorage.getItem(key)
}

export const setToLocal = (key: LocalStorageKeys, data: string) => {
  localStorage.setItem(key, data)
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
 * checks if is a member of a club if yes set nickname, year to the user store else reset values
 * @note This does not set the badge
 */
export const setValuesIfIsMember = async() => {
  // checks if is a member of a club
  // if yes set nickname, year to the user store, *not the badge
  // else reset values

  const store = useUserStore()
  const user = auth.value!.currentUser

  // user is not logged in
  if (!user) {
    store.reset()
    return
  }

  // checks if user is a member of a club
  // const membersCollectionRef = getCollectionRef('members')
  // const q = query(membersCollectionRef, where(user.email,))
  const userRef = doc(db.value!, 'members', user.email!)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    store.reset()
    return
  }

  const userDoc = userSnap.data() as MemberDoc
  store.setMemberValues({
    nickname: userDoc.name,
    clubRef: userDoc.club,
  })
}
