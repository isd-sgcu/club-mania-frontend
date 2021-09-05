<template>
  <div>
    <Banner theme="Main" :is-club="false" class="cursor-default pointer-events-none" />
    <div class="flex justify-center ml-6 mr-6 mt-10 mb-10">
      <form class="w-full max-w-[700px] flex flex-col" @submit.prevent="handleLogin">
        <text-sub2 class="text">
          ชื่อผู้ใช้
        </text-sub2>
        <input v-model="username" class="input" type="text" />
        <text-sub2 class="text">
          รหัสผ่าน
        </text-sub2>
        <input v-model="password" class="input" type="password" />
        <button
          type="submit"
          class="text-white font-Mitr bg-button pt-3 pb-3 text-size-[1rem] sm:text-size-[1.25rem] mt-6"
        >
          เข้าสู่ระบบ
        </button>
        <text-logo class="text-white mx-auto mt-5 hidden sm:block">
          Welcome to arena of valor!
        </text-logo>]
        <text-sub2
          v-if="isLoginFailed"
          class="text-red mx-auto mt-5"
        >
          ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง
        </text-sub2>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { doc, getDoc, Firestore } from 'firebase/firestore'
import { signInWithPopup, GoogleAuthProvider, Auth } from 'firebase/auth'
import { auth, db } from '~/firebase'

import { useUserStore } from '~/stores/user'

const router = useRouter()
const user = useUserStore()

const username = ref('')
const password = ref('')

const isLoginFailed = ref(false)

const handleLogin = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth.value as Auth, provider).then((result) => {
    // The signed-in user info
    const email = result.user.email
    const staffRef = doc(db.value as Firestore, 'staffs', email!.substr(0, 10))
    const staffdoc = getDoc(staffRef)

    staffdoc.then((snap) => {
      const staff = snap.data()
      if (staff)
        user.setNewName(staff.name)
    })
    router.push('/')
  })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.message)
      isLoginFailed.value = true
      setTimeout(() => { isLoginFailed.value = false }, 3000)
    })
}
</script>

<style scoped>
.text {
  @apply text-white font-Mitr mb-2;
}

.bg-button {
  position: relative;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      #242323 26.04%,
      #4b4a4a 50%,
      #242323 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
  z-index: 1;
}

.bg-button:hover::before {
  opacity: 1;
}

.bg-button::before {
  position: absolute;
  content: " ";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #4b4a4a;
  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 0;
}

.input {
  @apply border-white border-width-[1px] rounded-md pl-2 pt-1 pb-1 mb-3;
  background-color: transparent;
  color: white;
}
</style>
