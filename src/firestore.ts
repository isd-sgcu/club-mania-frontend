import { collection, getFirestore } from 'firebase/firestore'

export const db = getFirestore()

export const clubsColRef = collection(db, 'clubs')
export const membersColRef = collection(db, 'members')
export const postsColRef = collection(db, 'posts')
export const repliesColRef = collection(db, 'replies')
export const staffsColRef = collection(db, 'staffs')
