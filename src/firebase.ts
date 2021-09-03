// Initialize Cloud Firestore through Firebase
import { initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'

// These are null values if built for server
export const auth = ref<Auth | null>(null)
export const db = ref<Firestore | null>(null)

// These should only be called on the client side
if (typeof window !== 'undefined') {
  initializeApp({
    apiKey: 'AIzaSyBS0vzbtI2vIs--V0gPBm2fzhVB-xkOomE',
    authDomain: 'club-mania2021.firebaseapp.com',
    projectId: 'club-mania2021',
    storageBucket: 'club-mania2021.appspot.com',
    messagingSenderId: '142072639621',
    appId: '1:142072639621:web:0b7593b814aa6fe5f1f9ec',
    measurementId: 'G-SD608991N6',
  })

  auth.value = getAuth()
  db.value = getFirestore()
}
