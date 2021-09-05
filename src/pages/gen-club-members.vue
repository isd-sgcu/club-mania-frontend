<template>
  <button class="bg-red mt-30" @click="gen">
    <h1 class="text-white">
      gen docs for clubMembers collection
    </h1>
  </button>
</template>

<script setup lang="ts">
import { doc, setDoc } from 'firebase/firestore'
import clubMembers from '~/assets/clubs/club_members'
import { db } from '~/firebase'

// * generate personal info docs
const gen = () => {
  for (const clubName of Object.keys(clubMembers)) {
    const data = clubMembers[clubName]
    const clubRef = doc(db.value, 'clubMembers', clubName)
    const clubDoc = {}
    for (const e of data.members) {
      const chulaEmail = `${e.studentId}@student.chula.ac.th`
      clubDoc[chulaEmail] = {
        name: e.name,
        year: e.year,
      }
    }
    setDoc(clubRef, clubDoc)
  }
}
</script>
