<template>
  <div>
    <Banner theme="Main" :is-club="false" class="cursor-default pointer-events-none" />
    <div class="flex justify-center ml-4 mr-4 mt-10">
      <form class="w-full max-w-[700px] flex flex-col" @submit="(e) => {e.preventDefault()}">
        <label class="text">ชื่อผู้ใช้</label>
        <input class="input" type="text">
        <label class="text">รหัสผ่าน</label>
        <input class="input" type="password">
        <button type="submit" class="text-white font-Mitr bg-button pt-3 pb-3 text-size-[1.25rem] mt-6">
          เข้าสู่ระบบ
        </button>
        <text-logo class="text-white m-auto mt-10 text-size-[1rem] sm:text-size-[1.25rem]">
          Welcome to arena of valor!
        </text-logo>
      </form>
    </div>
  </div>
</template>

<style scoped>
.text {
    @apply text-white font-Mitr mb-2;
}

.bg-button {
    position: relative;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, #242323 26.04%, #4B4A4A 50%, #242323 75%, rgba(0, 0, 0, 0.8) 100%);
    z-index: 1;
}

.bg-button:hover::before {
    opacity: 1
}

.bg-button::before {
  position: absolute;
  content: " ";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #4B4A4A;
  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 0;
}

.input {
    @apply border-white border-width-[1px] rounded-md pl-2 pt-1 pb-1 mb-3;
    background-color: transparent;
    color: white
}
</style>
