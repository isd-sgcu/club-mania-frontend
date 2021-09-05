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

const gen = () => {
  for (const clubName of Object.keys(clubMembers)) {
    const data = clubMembers[clubName]
    const clubRef = doc(db.value, 'clubMembers', clubName)
    setDoc(clubRef, data)
  }
}
</script>
