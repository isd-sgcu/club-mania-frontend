// Initialize Cloud Firestore through Firebase
import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

initializeApp({
  apiKey: 'AIzaSyBS0vzbtI2vIs--V0gPBm2fzhVB-xkOomE',
  authDomain: 'club-mania2021.firebaseapp.com',
  projectId: 'club-mania2021',
  storageBucket: 'club-mania2021.appspot.com',
  messagingSenderId: '142072639621',
  appId: '1:142072639621:web:0b7593b814aa6fe5f1f9ec',
  measurementId: 'G-SD608991N6',
})

export const auth = getAuth()
export const db = getFirestore()

export const clubsColRef = collection(db, 'clubs')
export const membersColRef = collection(db, 'members')
export const postsColRef = collection(db, 'posts')
export const repliesColRef = collection(db, 'replies')
export const staffsColRef = collection(db, 'staffs')
